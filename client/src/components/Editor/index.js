import React, { Component } from 'react'
import { Button, Icon, Sidebar, Segment, Menu, Header } from 'semantic-ui-react'

export default class Editor extends Component {
  render () {
    return (
      <div className="c-editor">
        {/* Header */}
        <div className="c-editor__toolbar">
          <span className="c-editor__toolbar-title">Elon Musk</span>
          <Button basic icon className="c-editor__toolbar-publish">
            <Icon name="save" />
          </Button>
        </div>

        {/* Sidebar */}
        <div className="c-editor__content">
          <Sidebar.Pushable as={Segment} className="c-editor__content--all">
            <Sidebar as={Menu} animation="push" width="thin" visible={true} icon="labeled" vertical inverted>
              <Menu.Item name="home">
                <Icon name="home" />
                Home
              </Menu.Item>
              <Menu.Item name="gamepad">
                <Icon name="gamepad" />
                Games
              </Menu.Item>
              <Menu.Item name="camera">
                <Icon name="camera" />
                Channels
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <Header as="h3">Application Content</Header>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>

        {/* Footer */}

      </div>
    )
  }
}
