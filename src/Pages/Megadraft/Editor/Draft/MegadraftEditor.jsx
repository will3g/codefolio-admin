import React from "react";

import { MegadraftEditor, editorStateFromRaw, editorStateToJSON } from "megadraft";

import 'megadraft/dist/css/megadraft.css'

import slugify from 'slugify';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';

import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

import MyMegadraftTitle from '../Title/MegadraftTitle';
import MyMegadraftSubtitle from '../Subtitle/MegadraftSubtitle';
import PrimarySubhome from '../../Sidebar/Components/PrimarySubhomeOption';
import SecondarySubhomes from '../../Sidebar/Components/SecondarySubhomesOption';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.keyBindings = [
      {
        name: "save",
        isKeyBound: e => e.keyCode === 83 && e.ctrlKey,
        action: () => console.log("save")
      }
    ];
  }

  onAction(args) {
    console.log("onAction fired with args:", args);
  }

  render() {
    const { editorState, onChange } = this.props;

    return (
      <MegadraftEditor
        editorState={editorState}
        onChange={onChange}
        onAction={this.onAction}
        movableBlocks={true}
        keyBindings={this.keyBindings}
        resetStyleNewLine={true}
        maxSidebarButtons={null}
      />
    )
  }
}

class PublishButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      payload: this.props.payload
    }
  }

  urlCreator = (title, subhome) => {
    const path = slugify(title, {lower: true, strict: true});
    return `https://codefolio.dev${subhome.name}/${path}.html`;
  }

  saveAndPublishContent = (payload) => {
    // Function to save the content on DB
    console.log("saveAndPublishContent: ", payload);
  }

  onPublishClick = () => {
    const content = editorStateToJSON(this.props.payload.editorState);

    const { title, subtitle } = this.props.payload;

    // If url is not set, use the one from props (is not permitted to change the url if exists)
    console.log("this.props.payload.primarySubhome: ", this.props.payload.primarySubhome);
    const url = this.state.payload.url || this.urlCreator(title, this.props.payload.primarySubhome);
    const author = this.state.payload.author || this.props.payload.author;
    const primarySubhome = this.state.payload.primarySubhome || this.props.payload.primarySubhome;

    console.log("url: ", url);
    console.log("author: ", author);
    console.log("primarySubhome: ", primarySubhome);

    const payload = {
      title,
      subtitle,
      url,
      author,
      primarySubhome,
      data: content
    }

    this.setState({
      loading: true,
      payload: payload
    });

    this.saveAndPublishContent(payload);
  }

  render() {
    return (
      <LoadingButton
        color="primary"
        onClick={this.onPublishClick}
        loading={this.state.loading}
        loadingPosition="start"
        startIcon={<SendIcon />}
        variant="contained"
      >
        <span>Publish</span>
      </LoadingButton>
    );
  }
}

class SaveButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      payload: this.props.payload
    }
  }

  saveContent = (payload) => {
    // Function to save the content on DB
    console.log("saveContent: ", payload);
  }

  onSaveClick = () => {
    const content = editorStateToJSON(this.props.payload.editorState);

    const { title, subtitle } = this.props.payload;

    const payload = {
      title,
      subtitle,
      data: content
    }

    this.setState({
      loading: true,
      payload: payload
    });

    this.saveContent(payload);
  }

  render() {
    return (
      <LoadingButton
        color="primary"
        onClick={this.onSaveClick}
        loading={this.state.loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
      >
        <span>Save</span>
      </LoadingButton>
    );
  }
}

class ContentUrl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
    };
  }

  render() {
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      textAlign: 'left',
      color: theme.palette.text.secondary,
      height: 60,
      lineHeight: '60px',
      elevation: 0,
      margin: '10px',
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '1.125rem',
      letterSpacing: '-0.037rem',
    }));

    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <Item elevation="0">
            <Link
              href={this.state.url || ''}
              color="#1565c0"
              target="_blank"
            >
              {this.state.url || ''}
            </Link>
          </Item>
        </div>
      </Box>
    );
  }
}

export default class MyMegadraftEditor extends React.Component {
  constructor(props) {
    super(props);

    const payloadDB = props.payload;
    const subhomeOptionsDB = props.subhomeOptions;

    this.state = {
      editorState: editorStateFromRaw(payloadDB.data),
      title: payloadDB.title || '',
      subtitle: payloadDB.subtitle || '',
      url: payloadDB.url || '',
      primarySubhome: payloadDB.primarySubhome,
      author: payloadDB.author || '',
      subhomeOptionsDB: subhomeOptionsDB,
      onChange: this.onChange,
    };
  }

  setEditorState = editorState => {
    this.setState({ editorState });
  };

  onChangeTitle = newTitle => {
    this.setState({ title: newTitle });
  };

  onChangeSubtitle = newSubtitle => {
    this.setState({ subtitle: newSubtitle });
  };

  onChangeAuthor = newAuthor => {
    this.setState({ author: newAuthor });
  };

  onChangePrimarySubhome = newPrimarySubhome => {
    this.setState({ primarySubhome: newPrimarySubhome });
  };

  render() {
    const {
      editorState,
      title,
      subtitle,
      url,
      primarySubhome,
      author,
      subhomeOptionsDB,
      open = false,
    } = this.state;

    const drawerWidth = 320;

    const handleDrawerOpen = () => {
      this.setState({ open: true });
    };

    const handleDrawerClose = () => {
      this.setState({ open: false });
    };

    const DrawerHeader = styled('div')(({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      // ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    }));

    return (
      <>
        {/* HEADER */}
        <Box sx={{ '& > button': { m: 1 } }}>
          <PublishButton
            payload={this.state}
          />
          <SaveButton payload={this.state} />
        </Box>
        {/* HEADER */}
        <IconButton
          // color="inherit"
          // aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{
            position: 'fixed',
            right: '22px',
            top: '64px',
            backgroundColor: '#000 !important',
            color: '#fff',
            zIndex: 2,
            ...(open && { display: 'none' })
          }}
        >
          <MenuIcon />
        </IconButton>
        {/* Sidebar */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            }
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {open === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem disablePadding>
              {/* <ListItemButton> */}
              {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
              <PrimarySubhome 
                primarySubhome={primarySubhome}
                subhomeOptions={subhomeOptionsDB}
                onChange={this.onChangePrimarySubhome}
              />
              {/* <SecondarySubhomes subhomeOptions={subhomeOptionsDB} /> */}
              {/* </ListItemButton> */}
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        {/* Sidebar */}
        {/* Editor */}
        <MyMegadraftTitle cuurentTitle={title} onChange={this.onChangeTitle} />
        <MyMegadraftSubtitle cuurentSubtitle={subtitle} onChange={this.onChangeSubtitle} />
        <ContentUrl url={url} /> {/* URL GENERATOR - IF CONTENT IS PUBLISHED */}
        <Editor editorState={editorState} onChange={this.setEditorState} />
        {/* Editor */}
      </>
      // CREATE A SIDEBAR https://codesandbox.io/s/f884sq?file=/demo.js
    );
  }
}
