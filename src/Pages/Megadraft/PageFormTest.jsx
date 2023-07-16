import React from 'react';

import { ThemeProvider } from "@material-ui/styles";
import MyMegadraftEditor from './Editor/Draft/MegadraftEditor';

import theme from "./Editor/Draft/MegadraftEditorTheme";

const subhomesDB  = [
  {
    name: "/games",
    uuid: "saduoi1213",
  },
  {
    name: "/games/competition",
    uuid: "saduoi1213",
  },
  {
    name: "/games/jam",
    uuid: "saduoi12132",
  },
  {
    name: "/games/compo",
    uuid: "saduoi12133b",
  },
  {
    name: "/events/b3",
    uuid: "saduoi1213a31b",
  },
];

const paylaodDB = {
  "title": "The 3rd Annual 24 Hour Game Creation Challenge",
  "subtitle": "Theme: \"The End of the World\"",
  "publishedIn": "2009-11-07T00:00:00.000Z",
  "updatedIn": "2009-11-07T00:00:00.000Z",
  "author": "Ludum Dare",
  // "primarySubhome": {
  //   name: "/games/competition",
  //   uuid: "saduoi1213",
  // },
  "primarySubhome": null,
  "uniquePath": "/2009/11/07/3rd-annual-24-hour-game-creation-challenge.html",
  "thumbnail": "/game-creation-challenge.png",
  // "url": "https://codefolio.dev/games/competition/the-3rd-annual-24-hour-game-creation-challenge.html",
  "data": {
    "entityMap": {},
    "blocks": [
      {
        "key": "h3btd",
        "text": "This event is a challenge for game developers to create a game within a 24-hour time limit.",
        "type": "paragraph",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      },
      {
        "key": "j8f7s",
        "text": "The theme for the 3rd Annual 24 Hour Game Creation Challenge was \"The End of the World\".",
        "type": "paragraph",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      },
      {
        "key": "m7d9f",
        "text": "The challenge took place on November 7, 2009.",
        "type": "paragraph",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      },
      {
        "key": "n5c6g",
        "text": "The participants were required to submit their games for judging by the end of the 24-hour period.",
        "type": "paragraph",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
      }
    ]
  }
}

// const paylaodDB = {}

class PageFormTest extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ margin: 60 }}>
          <MyMegadraftEditor 
            payload={paylaodDB}
            subhomeOptions={subhomesDB}
          />
        </div>
      </ThemeProvider>
    )
  }
}

export default PageFormTest;