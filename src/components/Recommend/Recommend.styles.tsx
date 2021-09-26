import { makeStyles } from '@material-ui/core';
import {
  whiteBase,
  lightGray,
  lightGray5,
  gray,
  darkGray2,
  darkRed,
  darkGreen,
  primaryBlue,
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
    width: '30%',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2%',
    background: whiteBase,
    boxShadow: '0px 8px 36px rgba(0, 0, 0, 0.16)',
    borderRadius: '12px',
    padding: '2%',
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
    backgroundColor: `${whiteBase}`,
    border: `1px solid ${lightGray5}`,
    width: '100%',
    borderRadius: 5,
  },
  filterBarStyle: {
    marginTop: '3%',
    marginBottom: '2%',
    marginLeft: '0%',
    marginRight: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteButtonStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '2%',
    paddingBottom: '1%',
  },
  saveButtonStyle: {
    fontFamily: `${fontFamily.titleFont}`,
    fontSize: `${fontSize.ST1}`,
    backgroundColor: primaryBlue,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: primaryBlue,
    },
  },
  checkBoxContainerStyle: {
    width: '1%',
  },
  checkBoxStyle: {
    margin: '0',
    padding: '0',
  },
  tableHeaderStyle: {
    color: gray,
    fontFamily: `${fontFamily.bodyFont2}`,
    fontSize: `${fontSize.B2}`,
    whiteSpace: 'nowrap',
  },
  tableGreyTextStyle: {
    color: lightGray,
    fontFamily: `${fontFamily.bodyFont2}`,
    fontSize: `${fontSize.ST2}`,
  },
  tableBodyStyle: {
    fontFamily: `${fontFamily.bodyFont2}`,
    fontSize: `${fontSize.ST3}`,
    color: darkGray2,
    whiteSpace: 'nowrap',
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
  particularColumn: {
    width: '250px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  partyColumn: {
    width: '150px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: whiteBase,
    padding: '50px',
    marginTop: '15%',
    marginLeft: '40%',
  },
});
