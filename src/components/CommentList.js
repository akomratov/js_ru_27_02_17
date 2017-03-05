import React, {Component} from 'react'
import Comment from './Comment'

/* Вопросы, возникшие в процессе выполнения:

 1. Article и ArticleList - оба компоненты
     при этом Article унаследован от класса ReactComponent,
     а ArticleList - функциональное выражение
     Не могли бы вы прокомментировать второй подход?
     (насколько я помню на вебинаре вы не акцентировали на этом внимание)

 2. Было желание создать универсальный компонент-контейнер "Hide-Show"
     Назначение этого компонента: размещать внутри какую-то информацию
     (например, Статьи или Комментарии) с возможностью Открытия/закрытия
     по клику.
     Не понятно, как в такой универсальный контейнер передавать компонент,
     который надо поместить внутрь. Не могли бы пояснить?
     И используется ли такой подход в принципе? (универсальных компонентов контейнеров)

 3. Хочется, чтобы состояние "Открыт/Закрыт" для списка комментариев сохранялось
     между открытиями-закрытиями Статьи.
     Я это реализовал следующим образом:
     я поместил в состояние Article свойство "Открыт" для Комментариев (isCommentsOpen).
     Это свойство передаю из Article в CommentList вместе с set-методом через props.
     А как правильно использовать состояние родительского компонента в дочернем?
     Как правильно менять состояние родительского компонента из дочернего?

 4. Я правильно понимаю, что this.props в Конструкторе не доступно?
     Я попытался инициировать this.state.isOpen в CommentList значением из
     this.props.isCommentsOpen, которое передается из Article. Получил undefined
     С архитектурной точки зрения делают ли state в дочернем компоненте, если
     используется state родительского компонента? (на первый взгляд это вносит путаницу)
 */

class CommentList extends Component {

    constructor() {
        super()
        this.state = {
            // Actually this Property is not used any more
            // this.props.isCommentsOpen used instead
            isOpen: false
        }
    }

    render() {

        const comments = this.props.comments
        const {isOpen} = this.state
        // get state from Parent component
        console.log(this.props)
        const {isCommentsOpen} = this.props
        console.log('CommentList.render(): isCommentsOpen = ' + isCommentsOpen)

        let commentsHeader = null
        let commentsComp   = null

        if( comments ) {
            // isOpen was used for this.state.isOpen, now the parent state is used
            const hideShow = isCommentsOpen ? <b>[Hide]</b> : <b>[Show]</b>
            commentsHeader = <p onClick={this.handleClick}><b>Comments</b> {hideShow}</p>
            commentsComp = isCommentsOpen ? comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>) : null
        }

        return (
            <ul>
                {commentsHeader}
                {commentsComp}
            </ul>
        )

    }

    handleClick = (ev) => {
        const {isCommentsOpen} = this.props
        console.log('before click CommentList.isCommentsOpen = ' + isCommentsOpen)

        // Actually this this.state.isOpen is not used any more
        // this.props.isCommentsOpen used instead
        this.setState({
            isOpen: !this.state.isOpen
        })

        // update in parent component current state
        this.props.setCommentsOpenState( !isCommentsOpen )
    }
}

export default CommentList

/*
export default (props) => {

    const comments = props.comments

    let commentsComp = null

    if( comments ) {
        commentsComp = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
    }

    return (
        <ul>
            {commentsComp}
        </ul>
    )
}
*/
