import { useRef, useState } from 'react'
import './App.css'
import Button from './components/Button'
import TimePicker from './components/TimePicker'
import { ThemeContext } from './theme/ThemeContext'

function App() {
  const [meetingTime, setMeetingTime] =
    useState<string | null>('12:30')

  const buttonRef = useRef<HTMLButtonElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)

  return (
    <main className="page">
      <section>
        <h1>Button</h1>

        <div className="buttons-demo">
          <div className="buttons-row">
            <Button variant="fill" size="S">Кнопка</Button>
            <Button variant="fill" size="M">Кнопка</Button>
            <Button variant="fill" size="L">Кнопка</Button>

            <Button variant="outline" size="S">Кнопка</Button>
            <Button variant="outline" size="M">Кнопка</Button>
            <Button variant="outline" size="L">Кнопка</Button>

            <Button variant="text" size="S">Кнопка</Button>
            <Button variant="text" size="M">Кнопка</Button>
            <Button variant="text" size="L">Кнопка</Button>
          </div>

          <div className="buttons-row">
            <Button variant="fill" size="S" disabled>Кнопка</Button>
            <Button variant="fill" size="M" disabled>Кнопка</Button>
            <Button variant="fill" size="L" disabled>Кнопка</Button>

            <Button variant="outline" size="S" disabled>Кнопка</Button>
            <Button variant="outline" size="M" disabled>Кнопка</Button>
            <Button variant="outline" size="L" disabled>Кнопка</Button>

            <Button variant="text" size="S" disabled>Кнопка</Button>
            <Button variant="text" size="M" disabled>Кнопка</Button>
            <Button variant="text" size="L" disabled>Кнопка</Button>
          </div>

          <h2>Polymorphism & Ref</h2>

          <div className="buttons-row">
            <Button
              as="button"
              ref={buttonRef}
              variant="fill"
              size="M"
            >
              Кнопка
            </Button>

            <Button
              as="a"
              ref={linkRef}
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="M"
            >
              Кнопка
            </Button>

            <Button
              variant="text"
              size="M"
              onClick={() => buttonRef.current?.focus()}
            >
              Кнопка
            </Button>

            <Button
              variant="text"
              size="M"
              onClick={() => linkRef.current?.focus()}
            >
              Кнопка
            </Button>

            <Button
              as="a"
              href="https://react.dev"
              variant="outline"
              size="M"
              disabled
            >
              Кнопка
            </Button>
          </div>
        </div>
      </section>

      <section className="theme-section">
        <h1>ThemeContext</h1>

        <div className="theme-grid">
          <div className="theme-card">
            <h2>Default theme</h2>

            <div className="theme-buttons">
              <Button size="S">Кнопка</Button>
              <Button variant="outline" size="M">Кнопка</Button>
              <Button variant="text" size="L">Кнопка</Button>
              <Button size="S" disabled>Кнопка</Button>
            </div>
          </div>

          <ThemeContext
            tokens={{
              buttonSmallPaddingX: '40px',
              buttonMediumRadius: '24px',

              buttonFillBackground: '#6d28d9',
              buttonFillHoverBackground: '#7c3aed',
              buttonFillActiveBackground: '#4c1d95',
              buttonFillDisabledBackground: '#b8a1df',

              buttonOutlineBorder: '#6d28d9',
              buttonOutlineText: '#6d28d9',
              buttonOutlineHoverBackground: '#ede9fe',

              buttonTextText: '#6d28d9',
              buttonTextHoverBackground: '#ede9fe',
            }}
          >
            <div className="theme-card">
              <h2>Custom theme</h2>

              <div className="theme-buttons">
                <Button size="S">Кнопка</Button>
                <Button variant="outline" size="M">Кнопка</Button>
                <Button variant="text" size="L">Кнопка</Button>
                <Button size="S" disabled>Кнопка</Button>
              </div>

              <ThemeContext
                tokens={{
                  buttonFillBackground: '#059669',
                  buttonFillHoverBackground: '#047857',
                  buttonFillActiveBackground: '#065f46',
                }}
              >
                <div className="theme-inner">
                  <h2>Nested theme</h2>

                  <div className="theme-buttons">
                    <Button size="S">Кнопка</Button>
                    <Button variant="outline" size="M">Кнопка</Button>
                  </div>
                </div>
              </ThemeContext>
            </div>
          </ThemeContext>
        </div>
      </section>

      <section className="time-section">
        <h1>TimePicker</h1>

        <div className="time-examples">
          <div className="time-card">
            <h2>Default</h2>

            <TimePicker
              label="Время"
              defaultValue="10:30"
            />
          </div>

          <div className="time-card">
            <h2>Controlled</h2>

            <TimePicker
              label="Время встречи"
              value={meetingTime}
              onChange={setMeetingTime}
            />

            <p>Выбрано: {meetingTime ?? 'ничего'}</p>
          </div>

          <div className="time-card">
            <h2>Working hours</h2>

            <TimePicker
              label="Время записи"
              defaultValue="10:00"
              min="09:00"
              max="18:00"
              minuteStep={15}
            />
          </div>

          <div className="time-card">
            <h2>Night range</h2>

            <TimePicker
              label="Ночная смена"
              defaultValue="23:00"
              min="22:00"
              max="02:00"
              minuteStep={30}
            />
          </div>

          <div className="time-card">
            <h2>Small time step</h2>

            <TimePicker
              label="Маленький шаг"
              min="00:00"
              max="23:00"
              minuteStep={1}
            />
          </div>

          <div className="time-card">
            <h2>Disabled</h2>

            <TimePicker
              label="Недоступно"
              defaultValue="12:00"
              disabled
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App