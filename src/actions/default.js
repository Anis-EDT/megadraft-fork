/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import icons from "../icons";

export default [
  {
    type: "inline",
    label: "B",
    style: "BOLD",
    icon: icons.BoldIcon
  },
  {
    type: "inline",
    label: "I",
    style: "ITALIC",
    icon: icons.ItalicIcon
  },

  {
    type: "entity",
    label: "Link",
    style: "link",
    entity: "LINK",
    icon: icons.LinkIcon
  },
  {
    type: "entity",
    label: "h1",
    style: "link",
    entity: "INTERNAL_PAGE_LINK",
    icon: icons.LinkIcon
  },
  {
    type: "separator"
  },
  {
    type: "block",
    label: "UL",
    style: "unordered-list-item",
    icon: icons.ULIcon
  },

  {
    type: "block",
    label: "OL",
    style: "ordered-list-item",
    icon: icons.OLIcon
  },
  {
    type: "block",
    label: "QT",
    style: "blockquote",
    icon: icons.BlockQuoteIcon
  },
  {
    type: "separator"
  },

  {
    type: "block",
    label: "H1",
    style: "header-one",
    icon: icons.H1Icon
  },
  {
    type: "block",
    label: "H2",
    style: "header-two",
    icon: icons.H2Icon
  },
  {
    type: "block",
    label: "H3",
    style: "header-three",
    icon: icons.H3Icon
  },
  {
    type: "block",
    label: "H4",
    style: "header-four",
    icon: icons.H4Icon
  },
  {
    type: "separator"
  },
  {
    type: "block",
    label: "left",
    style: "left",
    icon: icons.LeftIcon
  },
  {
    type: "block",
    label: "center",
    style: "center",
    icon: icons.CenterIcon
  },
  {
    type: "block",
    label: "right",
    style: "right",
    icon: icons.RightIcon
  }
];
