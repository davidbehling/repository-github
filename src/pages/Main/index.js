import React, { useState, useCallback, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa"
import { Container, Form, SubmitButton, List, DeleteButton } from "./styles"
import api from '../../services/api'

export default function Main() {
  const [newRepository, setNewRepository] = useState('')
  const [repositories, setRepositories] = useState(() => {
    const repoStorage = localStorage.getItem("repos")
    return repoStorage ? JSON.parse(repoStorage) : []
  })
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(repositories))
  }, [repositories])

  function handleInput(e) {
    if (alert) {
      setAlert(false)
    }

    setNewRepository(e.target.value)
  }

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    async function submit() {
      setLoading(true)

      try {
        if (newRepository === "") {
          throw new Error("field empty!")
        }

        if (repositories.find(repo => repo.name === newRepository)) {
          throw new Error("dulicate repository!")
        }

        const response = await api.get(`repos/${newRepository}`)

        const data = {
          name: response.data.full_name
        }

        setRepositories([...repositories, data])
        setNewRepository('')  
      } catch(error) {
        setAlert(true)
        console.log({error: error, action: 'submit'})
      } finally {
        setLoading(false)
      }
    }

    submit()
  }, [newRepository, repositories])

  const handleDelete = useCallback((repo) => {
    const changeRepositories = repositories.filter(r => r.name !== repo)

    setRepositories(changeRepositories)
  }, [repositories])

  return(
    <Container>  
      <h1>
        <FaGithub size={25}/>
        My Repositories
      </h1>

      <Form onSubmit={handleSubmit} error={alert ? 1 : 0}>
        <input type="text" placeholder=" Repository Add" value={newRepository} onChange={handleInput}/>

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="FFF" size={13}/>
          ) : (
            <FaPlus color="FFF" size={13}/>
          )}          
        </SubmitButton>
      </Form>

      <List>
        {repositories.map(repo => (
          <li key={repo.name}>
            <span>
              <DeleteButton onClick={() => handleDelete(repo.name)}>
                <FaTrash size={14}/>
              </DeleteButton>
              {repo.name}
            </span>

            <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
              <FaBars size={20}/>
            </Link>
          </li>
        ))}
      </List>
    </Container>
  )
}