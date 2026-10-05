import { useEffect, useMemo, useRef, useState } from 'react'
import './TimePicker.css'

export interface TimePickerProps {
  value?: string | null
  defaultValue?: string | null
  onChange?: (value: string | null) => void
  min?: string
  max?: string
  minuteStep?: number
  disabled?: boolean
  placeholder?: string
  label?: string
  clearable?: boolean
  className?: string
}

const minutesInDay = 24 * 60
const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/

function parseTime(value?: string | null) {
  if (!value || !timePattern.test(value)) {
    return null
  }

  const [hours, minutes] = value.split(':').map(Number)
  return hours * 60 + minutes
}

function formatTime(totalMinutes: number) {
  const normalized =
    ((totalMinutes % minutesInDay) + minutesInDay) % minutesInDay

  const hours = Math.floor(normalized / 60)
  const minutes = normalized % 60

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}

function isInRange(value: number, min: number, max: number) {
  if (min <= max) {
    return value >= min && value <= max
  }

  return value >= min || value <= max
}

function clockDistance(first: number, second: number) {
  const distance = Math.abs(first - second)
  return Math.min(distance, minutesInDay - distance)
}

function TimePicker({
  value,
  defaultValue = null,
  onChange,
  min = '00:00',
  max = '23:59',
  minuteStep = 5,
  disabled = false,
  placeholder = 'Выберите время',
  label,
  clearable = true,
  className = '',
}: TimePickerProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)

  const [internalValue, setInternalValue] = useState<string | null>(() => {
    return parseTime(defaultValue) === null ? null : defaultValue
  })

  const controlled = value !== undefined
  const currentValue = controlled ? value ?? null : internalValue

  const selectedMinutes = parseTime(currentValue)

  const step = Number.isFinite(minuteStep)
    ? Math.min(60, Math.max(1, Math.trunc(minuteStep)))
    : 5

  const minMinutes = parseTime(min) ?? 0
  const maxMinutes = parseTime(max) ?? minutesInDay - 1

  const options = useMemo(() => {
    const result: string[] = []

    for (let hour = 0; hour < 24; hour += 1) {
      for (let minute = 0; minute < 60; minute += step) {
        const total = hour * 60 + minute

        if (isInRange(total, minMinutes, maxMinutes)) {
          result.push(formatTime(total))
        }
      }
    }

    if (result.length === 0) {
      result.push(formatTime(minMinutes))
    }

    if (minMinutes > maxMinutes) {
      result.sort((first, second) => {
        const firstMinutes = parseTime(first) ?? 0
        const secondMinutes = parseTime(second) ?? 0

        const firstDistance =
          (firstMinutes - minMinutes + minutesInDay) % minutesInDay

        const secondDistance =
          (secondMinutes - minMinutes + minutesInDay) % minutesInDay

        return firstDistance - secondDistance
      })
    }

    return result
  }, [minMinutes, maxMinutes, step])

  const selectedValue =
    selectedMinutes !== null &&
    isInRange(selectedMinutes, minMinutes, maxMinutes)
      ? formatTime(selectedMinutes)
      : null

  const availableHours = useMemo(() => {
    return Array.from(
      new Set(options.map((option) => Number(option.slice(0, 2)))),
    )
  }, [options])

  const selectedHour = selectedValue
    ? Number(selectedValue.slice(0, 2))
    : null

  const activeHour =
    selectedHour !== null && availableHours.includes(selectedHour)
      ? selectedHour
      : availableHours[0] ?? 0

  const availableMinutes = useMemo(() => {
    return options
      .filter((option) => Number(option.slice(0, 2)) === activeHour)
      .map((option) => Number(option.slice(3, 5)))
  }, [options, activeHour])

  function changeValue(nextValue: string | null) {
    if (!controlled) {
      setInternalValue(nextValue)
    }

    onChange?.(nextValue)
  }

  function selectHour(hour: number) {
    const hourOptions = options.filter(
      (option) => Number(option.slice(0, 2)) === hour,
    )

    if (hourOptions.length === 0) {
      return
    }

    if (!selectedValue) {
      changeValue(hourOptions[0])
      return
    }

    const currentMinute = Number(selectedValue.slice(3, 5))

    const sameMinute = hourOptions.find(
      (option) => Number(option.slice(3, 5)) === currentMinute,
    )

    if (sameMinute) {
      changeValue(sameMinute)
      return
    }

    const closestMinute = hourOptions.reduce((best, option) => {
      const bestMinute = Number(best.slice(3, 5))
      const optionMinute = Number(option.slice(3, 5))

      return Math.abs(optionMinute - currentMinute) <
        Math.abs(bestMinute - currentMinute)
        ? option
        : best
    })

    changeValue(closestMinute)
  }

  function selectMinute(minute: number) {
    const nextValue = `${String(activeHour).padStart(2, '0')}:${String(
      minute,
    ).padStart(2, '0')}`

    if (!options.includes(nextValue)) {
      return
    }

    changeValue(nextValue)
    setOpen(false)
  }

  function selectNow() {
    const now = new Date()
    const nowMinutes = now.getHours() * 60 + now.getMinutes()

    const closest = options.reduce((best, option) => {
      const bestMinutes = parseTime(best) ?? 0
      const optionMinutes = parseTime(option) ?? 0

      return clockDistance(optionMinutes, nowMinutes) <
        clockDistance(bestMinutes, nowMinutes)
        ? option
        : best
    })

    changeValue(closest)
    setOpen(false)
  }

  function clearValue() {
    changeValue(null)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) {
      return
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div
      ref={rootRef}
      className={`time-picker ${className}`.trim()}
    >
      {label && <div className="time-picker__label">{label}</div>}

      <div className="time-picker__control">
        <button
          type="button"
          className="time-picker__trigger"
          disabled={disabled}
          onClick={() => setOpen((previous) => !previous)}
          aria-expanded={open}
          aria-haspopup="dialog"
        >
          <span
            className={
              selectedValue
                ? 'time-picker__value'
                : 'time-picker__placeholder'
            }
          >
            {selectedValue ?? placeholder}
          </span>

          <span className="time-picker__clock" aria-hidden="true">
            ◷
          </span>
        </button>

        {clearable && selectedValue && !disabled && (
          <button
            type="button"
            className="time-picker__clear"
            onClick={clearValue}
            aria-label="Очистить время"
          >
            ×
          </button>
        )}
      </div>

      {open && !disabled && (
        <div
          className="time-picker__popup"
          role="dialog"
          aria-label="Выбор времени"
        >
          <div className="time-picker__columns">
            <div className="time-picker__column">
              <div className="time-picker__column-title">
                Часы
              </div>

              <div className="time-picker__options">
                {availableHours.map((hour) => (
                  <button
                    key={hour}
                    type="button"
                    className={`time-picker__option ${
                      activeHour === hour
                        ? 'time-picker__option--selected'
                        : ''
                    }`}
                    onClick={() => selectHour(hour)}
                  >
                    {String(hour).padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>

            <div className="time-picker__column">
              <div className="time-picker__column-title">
                Минуты
              </div>

              <div className="time-picker__options">
                {availableMinutes.map((minute) => {
                  const selectedMinute = selectedValue
                    ? Number(selectedValue.slice(3, 5))
                    : null

                  return (
                    <button
                      key={minute}
                      type="button"
                      className={`time-picker__option ${
                        selectedMinute === minute
                          ? 'time-picker__option--selected'
                          : ''
                      }`}
                      onClick={() => selectMinute(minute)}
                    >
                      {String(minute).padStart(2, '0')}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="time-picker__footer">
            <button
              type="button"
              className="time-picker__footer-button"
              onClick={selectNow}
            >
              Сейчас
            </button>

            {clearable && (
              <button
                type="button"
                className="time-picker__footer-button"
                onClick={clearValue}
              >
                Очистить
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default TimePicker