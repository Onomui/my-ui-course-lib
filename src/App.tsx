import './App.css'
import Button from './components/Button'

function App() {
  return (
    <main className="page">
      <h1>Button</h1>

      <section className="buttons-demo">
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
      </section>
    </main>
  )
}

export default App