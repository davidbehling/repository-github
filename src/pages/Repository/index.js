import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import { Container, Owner, Loading, BackButton, IssuesList, PageActions, FilterList } from './styles'
import api from '../../services/api'

export default function Repository() {
  const { repositoryName } = useParams()

  const [repostiroy, setRepository] = useState({})
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [filterIndex, setFilterIndex] = useState(0)

  const [filters, setFilters] = useState([
    {state: 'all', label: 'All'},
    {state: 'open', label: 'Open'},
    {state: 'closed', label: 'Closed'}
  ])


  useEffect(() => {
    async function load() {
      const name = decodeURIComponent(repositoryName)

      const [repositoryData, issuesData] = await Promise.all([
        api.get(`/repos/${name}`),
        api.get(`/repos/${name}/issues`, {
          params: {
            state: filters[filterIndex].state,
            per_page: 5
          }
        })
      ])
      console.log(repositoryData.data)
      setRepository(repositoryData.data)
      setIssues(issuesData.data)
      setLoading(false)
    }

    load()
  }, [])

  useEffect(() => {
    async function loadIssues() {
      const name = decodeURIComponent(repositoryName)

      const response = await api.get(`/repos/${name}/issues`, {
        params: {
          state: filters[filterIndex].state,
          page,
          per_page: 5
        }
      })

      setIssues(response.data)
    }

    loadIssues()
  }, [page, filters, filterIndex])

  function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1)
  }

  function handleFilter(index) {
    setFilterIndex(index)
  }

  if(loading) {
    return(
      <Loading>
        <h1> Loading...</h1>
      </Loading>
    )
  }

  return(
    <Container>
      <BackButton to="/">
        <FaArrowLeft color={"#000"} size={30} />
      </BackButton>

      <Owner>
        <img src={repostiroy.owner.avatar_url} alt={repostiroy.owner.login}/>
        <h1>{repostiroy.name}</h1>
        <p>{repostiroy.desciption}</p>
      </Owner>

      <FilterList active={filterIndex}>
        {filters.map((filter, index) => (
          <button type="button" key={filter.label} onClick={() => handleFilter(index)}> {filter.label} </button>
        ))}
      </FilterList>

      <IssuesList>
        {issues.map(issue => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login}/>

            <div>
              <strong>
                <a href={issue.html_url}> {issue.title} </a>

                {issue.labels.map(label => (
                  <span key={String(label.id)}> {label.name} </span>
                ))}
              </strong>

              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>

      <PageActions>
        <button type="button" onClick={() => handlePage('back')} disabled={page < 2}> Back </button>
        <button type="button" onClick={() => handlePage('next')}> Next </button>
      </PageActions>
    </Container>
  )
}
