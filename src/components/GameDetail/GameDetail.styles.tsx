import { makeStyles } from '@material-ui/core';
import {
  whiteBase,
  lightGray,
  lightGray5,
  gray,
  darkGray2,
  darkRed,
  darkGreen,
  primaryBlue, blueDarker20,
} from '../../utils/colors';

import { fontFamily, fontSize, lineHeight } from '../../utils/typography';

export const useStyles = makeStyles({
  iconStyle: {
    marginRight: '20px',
  },
  searchBoxStyle: {
    backgroundColor: `${whiteBase}`,
    marginTop: '5%',
  },
  titleStyle: {
    fontSize: `${fontSize.H4}`,
    fontWeight: 'bold',
    lineHeight: `${lineHeight}`,
    textTransform: 'capitalize',
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
    width: '90%',
    alignContent: 'center',
    marginLeft: '5%',
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
    width: '20%',
    height: '20%',
    border: `1px solid ${blueDarker20}`,
    padding: '1%',
    color: gray,
    background: whiteBase,
    borderRadius: '12px',
    fontSize: fontSize.ST3,
    marginBottom: '0.5%',
    fontFamily: fontFamily.bodyFont2,
    marginLeft: '20%',
    marginTop: '3%',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: `${fontSize.H6}`,
    marginBottom: '4%',
  },
  modalMessage: {
    fontSize: `${fontSize.B1}`,
    marginBottom: '5%',
    color: 'rgba(21, 25, 32, 0.5)',
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
  formControl: {
    minWidth: 200,
  },
});
