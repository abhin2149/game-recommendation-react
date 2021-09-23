import { makeStyles } from '@material-ui/core';
import {
  whiteBase,
  gray,
  darkGray2, lightGray, darkRed, darkGreen, lightGray5,
} from '../../utils/colors';

import {fontFamily, fontSize, fontWeight, lineHeight} from '../../utils/typography';

export const useStyles = makeStyles({
  iconStyle: {
    marginRight: '20px',
  },
  searchBoxStyle: {
    backgroundColor: whiteBase,
    marginTop: '5%',
  },
  titleStyle: {
    marginTop: '2%',
    color: whiteBase,
    background: 'rgba(255,255,255,.2)',
    padding: '2%',
    fontSize: fontSize.H5,
    textAlign: 'center',
    borderRadius: '10px',
  },
  dividerStyle: {
    color: gray,
    fontWeight: 'normal',
  },
  subTitleStyle: {
    color: gray,
    fontSize: `${fontSize.H6}`,
    lineHeight: `${lineHeight}`,
    fontWeight: 'normal',
  },
  titleContainerStyle: {
    marginLeft: '0rem',
  },
  containerStyle: {
    textAlign: 'center',
    marginTop: '3%',
    width: '20%',
    background: whiteBase,
    boxShadow: '0px 8px 36px rgba(0, 0, 0, 0.16)',
    borderRadius: '12px',
    padding: '1%',
  },
  tableStyle: {
    marginBottom: '20px',
  },
  searchInputStyle: {
    marginTop: '4%',
    paddingRight: '2%',
  },
  buttonStyle: {
    marginTop: '5%',
    textTransform: 'capitalize',
    fontSize: `${fontSize.B1}`,
  },
  modalStyle: {
    width: '60%',
    height: '85%',
    background: whiteBase,
    boxShadow: '0px 8px 36px rgba(0, 0, 0, 0.16)',
    borderRadius: '12px',
    position: 'absolute',
    left: '20%',
    top: '10%',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: `${fontSize.H6}`,
    marginBottom: '4%',
  },
  modalMessage: {
    marginTop: '6%',
    fontSize: fontSize.H7,
    fontWeight: fontWeight.small,
    color: darkGray2,
  },
  tableContainerStyle: {
    marginLeft: '20%',
    backgroundColor: `${whiteBase}`,
    border: `1px solid ${lightGray5}`,
    width: '60%',
    padding: '2%',
    borderRadius: 5,
  },
  tableHeaderStyle: {
    color: darkGray2,
    fontFamily: `${fontFamily.titleFont}`,
    fontWeight: fontWeight.semiBold,
    fontSize: `${fontSize.B1}`,
    whiteSpace: 'nowrap',
  },
  tableGreyTextStyle: {
    color: lightGray,
    fontFamily: `${fontFamily.bodyFont2}`,
    fontSize: `${fontSize.ST2}`,
  },
  tableBodyStyle: {
    fontFamily: `${fontFamily.bodyFont2}`,
    fontSize: `${fontSize.ST1}`,
    color: darkGray2,
    whiteSpace: 'nowrap',
  },
  hover: {
    transition: 'transform .2s',
    "&:hover": {
      transform: "scale(1.05)",
      cursor: 'pointer',
    },
  },
  tablePaginationStyle: {
    color: darkGray2,
  },
  debitTransactionStyle: {
    fontFamily: `${fontFamily.bodyFont2}`,
    fontSize: `${fontSize.ST3}`,
    color: darkRed,
  },
  creditTransactionStyle: {
    fontFamily: `${fontFamily.bodyFont2}`,
    fontSize: `${fontSize.ST3}`,
    color: darkGreen,
  },
});
