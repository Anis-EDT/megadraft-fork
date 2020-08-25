/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import BoldIcon from "./icons/bold";
import ItalicIcon from "./icons/italic";
import ULIcon from "./icons/ul";
import OLIcon from "./icons/ol";

import BlockQuoteIcon from "./icons/blockquote";
import LinkIcon from "./icons/link";
import CrossIcon from "./icons/cross";
import ImageIcon from "./icons/image";
import VideoIcon from "./icons/video";
import EditIcon from "./icons/edit";
import DeleteIcon from "./icons/delete";
import CropIcon from "./icons/crop";
import MediaBigIcon from "./icons/mediaBig";
import MediaMediumIcon from "./icons/mediaMedium";
import MediaSmallIcon from "./icons/mediaSmall";
import DropdownArrow from "./icons/dropdownArrow";
import ErrorIcon from "./icons/error";
import UnlinkIcon from "./icons/unlink";
import CloseIcon from "./icons/close";
import MoreIcon from "./icons/more";

var _left = _interopRequireDefault(require("./icons/left"));
var _right = _interopRequireDefault(require("./icons/right"));
var _center = _interopRequireDefault(require("./icons/center"));

var _h1 = _interopRequireDefault(require("./icons/h1"));

var _h2 = _interopRequireDefault(require("./icons/h2"));

var _h3 = _interopRequireDefault(require("./icons/h3"));

var _h4 = _interopRequireDefault(require("./icons/h4"));

const icons = {
  BoldIcon,
  ItalicIcon,
  ULIcon,
  OLIcon,
  H1Icon: _h1["default"],
  H2Icon: _h2["default"],
  H3Icon: _h3["default"],
  H4Icon: _h4["default"],
  BlockQuoteIcon,
  LinkIcon,
  CrossIcon,
  ImageIcon,
  VideoIcon,
  EditIcon,
  DeleteIcon,
  CropIcon,
  MediaBigIcon,
  MediaMediumIcon,
  MediaSmallIcon,
  DropdownArrow,
  ErrorIcon,
  UnlinkIcon,
  CloseIcon,
  MoreIcon,
  CenterIcon: _center["default"],
  LeftIcon: _left["default"],
  RightIcon: _right["default"]
};

export default icons;
