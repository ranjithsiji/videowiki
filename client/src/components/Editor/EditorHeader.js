import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Icon, Popup } from 'semantic-ui-react'
import copy from 'clipboard-copy';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share'
import { NotificationManager } from 'react-notifications';
import Blinker from '../common/Blinker';

const {
  FacebookShareButton,
  // GooglePlusShareButton,
  TwitterShareButton,
  VKShareButton,
  RedditShareButton,
} = ShareButtons

const FacebookIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')
// const GooglePlusIcon = generateShareIcon('google')
const VKIcon = generateShareIcon('vk')
const RedditIcon = generateShareIcon('reddit')

class EditorHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blink: false,
    }
  }

  componentDidMount() {
    this.setState({ blink: true })
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.currentSlide && nextProps.currentSlide.position > -1 &&
      this.props.currentSlide && this.props.currentSlide.position > -1 &&
      this.props.currentSlide.position !== nextProps.currentSlide.position &&
      (!nextProps.currentSlide.media)
    ) {
      this.setState({ blink: true })
    }
  }

  onCopy() {
    copy(location.href);
    NotificationManager.success('Link copied to clipboard');
  }

  _renderShareButton() {
    return (
      <Button
        basic
        icon
        className="c-editor__toolbar-publish"
        title="Share"
      >
        <Icon name="share alternate" inverted color="grey" />
      </Button>
    )
  }

  _renderShareButtons() {
    const { article } = this.props
    const title = article.title.split('_').join(' ')
    const url = location.href;
    const description = `Checkout the new VideoWiki article at ${location.href}`

    return (
      <span>
        <FacebookShareButton
          url={url}
          title={title}
          picture={article.image}
          description={description}
          className="c-editor__share-icon"
        >
          <FacebookIcon
            size={32}
            round
          />
        </FacebookShareButton>

        <TwitterShareButton
          url={url}
          title={title}
          className="c-editor__share-icon"
        >
          <TwitterIcon
            size={32}
            round
          />
        </TwitterShareButton>

        <VKShareButton
          url={url}
          image={article.image}
          windowWidth={660}
          windowHeight={460}
          className="c-editor__share-icon"
        >
          <VKIcon
            size={32}
            round
          />
        </VKShareButton>
        <RedditShareButton
          url={url}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="c-editor__share-icon"
        >
          <RedditIcon
            size={32}
            round
          />
        </RedditShareButton>
        <Popup
          trigger={(
            <Button style={{ position: 'relative', top: -9 }} circular color="primary" icon="copy" onClick={this.onCopy.bind(this)} />
          )}
        >
          Copy article link
        </Popup>
      </span>
    )
  }

  _renderShareIcon() {
    return this.props.mode === 'viewer' ? (
      <Popup
        trigger={this._renderShareButton()}
        hoverable
      >
        {this._renderShareButtons()}
      </Popup>
    ) : null
  }

  _navigateToEditor() {

    const { article } = this.props
    const wikiSource = article.wikiSource || 'https://en.wikipedia.org';

    this.props.history.push(`/editor/${article.title}?wikiSource=${wikiSource}`)
  }

  _publishArticle() {
    this.props.onPublishArticle()
  }

  _renderPublishOrEditIcon() {
    return this.props.mode === 'viewer' ? (
      <Blinker
        secondary="#1678c2"
        interval={1500}
        repeat={3}
        blink={this.state.blink}
        onStop={() => this.setState({ blink: false })}
      >
        <Button
          basic
          icon
          className="c-editor__toolbar-publish"
          style={{ height: '100%' }}
          title="Edit"
          onClick={() => this._navigateToEditor()}
        >
          <Icon name="pencil" inverted color="grey" />
        </Button>
      </Blinker>
    ) : (
        <Button
          size="huge"
          basic
          icon
          className="c-editor__toolbar-publish"
          title="Publish"
          onClick={() => this._publishArticle()}
        >
          <Icon name="save" inverted color="grey" />
        </Button>
      )
  }

  render() {
    const { article } = this.props
    const wikiSource = article.wikiSource || 'https://en.wikipedia.org';
    return (
      <div className="c-editor__toolbar">
        <span className="c-editor__toolbar-title">{article.title.split('_').join(' ')}</span>
        <a
          className="c-editor__footer-wiki c-editor__footer-sidebar c-editor__toolbar-publish c-app-footer__link "
          href={`${wikiSource}/wiki/${article.title}`}
          target="_blank"
        >
          <Icon name="wikipedia w" inverted color="grey" />
        </a>
        {this._renderShareIcon()}
        {this._renderPublishOrEditIcon()}
      </div>
    )
  }
}

EditorHeader.propTypes = {
  article: PropTypes.object.isRequired,
  mode: PropTypes.string,
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
  onPublishArticle: PropTypes.func.isRequired,
  currentSlide: PropTypes.object.isRequired,
}

export default withRouter(EditorHeader)
