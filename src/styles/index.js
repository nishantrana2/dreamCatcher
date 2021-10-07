import styled from "@emotion/styled";
import { variant } from "styled-system";
import theme from "./theme";

import {
  space,
  layout,
  color,
  flexbox,
  border,
  typography,
  background,
  grid,
  shadow,
  position,
} from "styled-system";

export const Box = styled.div(
  variant({
    prop: "type",
    variants: {
      row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      column: {
        display: "flex",
        flexDirection: "column",
      },
      icon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 17px",
        backgroundColor: "#43AFFF",
        borderRadius: "5px",
      },
      card: {
        display: "flex",
        flexDirection: "column",
        background: "white",
        borderRadius: "5px",
        padding: "15px",
        boxShadow: "0px 3px 6px #557DA526",
      },
      location: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "10px",
      },
      view: {
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        alignItems: "center",
        padding: "12px",
        backgroundColor: "#43AFFF33",
        borderRadius: "5px",
        color: "#303F60",
        fontSize: "12px",
        cursor: "pointer",
      },
      applications: {
        display: "flex",
        flexDirection: "column",
        padding: "14px",
        border: "1px solid #303F6080",
        borderRadius: "5px",
        backgroundColor: "white",
      },
    },
  }),
  space,
  color,
  grid,
  layout,
  flexbox,
  border,
  typography,
  shadow,
  position,
  background
);

export const Button = styled("button")(
  {
    appearance: "none",
    fontWeight: theme.fontWeights.semiBold,
    width: "148px",
    height: "46px",
    border: "1px solid #43AFFF",
    background: "#43AFFF33 0% 0% no-repeat padding-box",

    borderRadius: "5px",
    opacity: 1,
    fontSize: "16px",

    cursor: "pointer",

    padding: "14px 23px",

    color: "#ffffff",
  },
  variant({
    prop: "type",
    variants: {
      primary: {
        background: "#43AFFF 0% 0% no-repeat padding-box",
        border: "1px solid #43AFFF",
        borderRadius: "5px",
        padding: "13px 53px",
      },
      secondary: {
        width: "125px",
        height: "32px",
        fontSize: "12px",
        background: "#43AFFF33",
        padding: "9px 14px",
        color: "#303F60",
      },
    },
  }),
  space,
  color,
  typography,
  layout,
  flexbox,
  border
);

export const Span = styled.span(
  {
    fontWeight: theme.fontWeights.normal,
    fontSize: "15px",
    color: theme.colors.grey,
    lineHeight: "24px",
  },
  space,
  color,
  typography,
  layout,
  variant({
    prop: "type",
    variants: {
      error: {
        fontSize: "12px",
        color: "#FF0000",
      },
      link: {
        display: "inline-block",
        fontSize: "14px",
        fontWeight: theme.fontWeights.normal,
        marginTop: "23px",
        marginBottom: "6px",
        padding: "0",
        color: "#43AFFF",
      },
      headOne: {
        fontSize: "22px",
        color: "white",
        fontWeight: theme.fontWeights.bold,
      },
      headTwo: {
        fontSize: "22px",
        color: "#43AFFF",
        fontWeight: theme.fontWeights.bold,
      },
      cardTitle: {
        fontSize: "17px",
        color: "#303F60",
        fontWeight: theme.fontWeights.normal,
      },
      cardDesc: {
        fontSize: "14px",
        color: "#303F60",
        fontWeight: theme.fontWeights.normal,
        marginTop: "15px",
        marginBottom: "10px",
        lineHeight: "15px",
      },
      location: {
        fontSize: "14px",
        fontWeight: theme.fontWeights.normal,

        color: "#303F60",
      },
    },
  })
);

export const H6 = styled.h6(
  {
    fontSize: theme.fontSizes[4],
    color: theme.colors.grey,
    fontWeight: theme.fontWeights.medium,
    marginBottom: 0,
  },
  variant({
    prop: "type",
    variants: {
      apphead: {
        fontSize: "19px",
        margin: "0 0 20px 8px",
        // marginLeft: "8px",
      },
    },
  }),
  space,
  color,
  typography,
  position,
  border,
  layout
);
