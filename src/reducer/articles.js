import {articles} from '../fixtures'

export default (state = articles, action) => {
    const { type, payload } = action

    switch (type) {
    }

    return articles
}