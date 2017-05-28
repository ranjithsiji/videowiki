import express from 'express'
import { search, getPageContentHtml, breakTextIntoSlides } from '../../controllers/wiki'
import { fetchArticle } from '../../controllers/article'

import Article from '../../models/Article'

const console = process.console
const router = express.Router()

module.exports = () => {
  // ========== Search
  router.get('/search', (req, res) => {
    const { searchTerm, limit } = req.query

    if (!searchTerm) {
      return res.send('Invalid searchTerm!')
    }

    search(searchTerm, limit, (err, results) => {
      if (err) {
        console.log(err)
        return res.send('Error while searching!')
      }

      const searchResults = results.map((result) => {
        console.log('')
        return {
          title: result,
          description: '',
        }
      })

      return res.json({ searchResults })
    })
  })

  // ============== Fetch VideoWiki article by title
  router.get('/article', (req, res) => {
    const { title } = req.query

    if (!title) {
      return res.send('Invalid wiki title!')
    }

    fetchArticle(title, (err, article) => {
      if (err) {
        return res.send('Error while fetching data!')
      }

      res.json(article)
    })
  })

  // ============== Convert wiki to video wiki
  router.get('/convert', (req, res) => {
    const { title } = req.query

    if (!title) {
      return res.send('Invalid wiki title!')
    }

    breakTextIntoSlides(title, (err, result) => {
      if (err) {
        return res.send('Error while fetching data!')
      }

      res.json(result)
    })
  })

  // ============== Get wiki content
  router.get('/', (req, res) => {
    const { title } = req.query

    if (!title) {
      return res.send('Invalid wiki title!')
    }

    // Check if DB already contains a VideoWiki article. If yes, redirect user to
    // videowiki article.

    Article.findOne({ title }, (err, article) => {
      if (err) {
        console.log(err)
        return res.send('Error while fetching content!')
      }

      if (article) {
        return res.json({ redirect: true, path: `/videowiki/${title}` })
      } else {
        getPageContentHtml(title, (err, result) => {
          if (err) {
            console.log(err)
            return res.send('Error while fetching content!')
          }

          return res.send(result)
        })
      }
    })
  })

  return router
}
