import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import TimePicker from './components/TimePicker'

function App() {
  const [meetingTime, setMeetingTime] =
    useState<string | null>('12:30')

  return (
    <main className="page">
      <section>
        <h1>Button</h1>

        <div className="buttons-demo">
          <div className="buttons-row">
            <Button variant="fill" size="S">
              Кнопка
            </Button>
            <Button variant="fill" size="M">
              Кнопка
            </Button>
            <Button variant="fill" size="L">
              Кнопка
            </Button>

            <Button variant="outline" size="S">
              Кнопка
            </Button>
            <Button variant="outline" size="M">
              Кнопка
            </Button>
            <Button variant="outline" size="L">
              Кнопка
            </Button>

            <Button variant="text" size="S">
              Кнопка
            </Button>
            <Button variant="text" size="M">
              Кнопка
            </Button>
            <Button variant="text" size="L">
              Кнопка
            </Button>
          </div>

          <div className="buttons-row">
            <Button variant="fill" size="S" disabled>
              Кнопка
            </Button>
            <Button variant="fill" size="M" disabled>
              Кнопка
            </Button>
            <Button variant="fill" size="L" disabled>
              Кнопка
            </Button>

            <Button variant="outline" size="S" disabled>
              Кнопка
            </Button>
            <Button variant="outline" size="M" disabled>
              Кнопка
            </Button>
            <Button variant="outline" size="L" disabled>
              Кнопка
            </Button>

            <Button variant="text" size="S" disabled>
              Кнопка
            </Button>
            <Button variant="text" size="M" disabled>
              Кнопка
            </Button>
            <Button variant="text" size="L" disabled>
              Кнопка
            </Button>
          </div>
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

            <p>
              Выбрано: {meetingTime ?? 'ничего'}
            </p>
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