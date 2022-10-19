import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store,persistor} from '../src/store'
import { BrowserRouter } from "react-router-dom";
import './static/fonts/MyriadPro-Black.otf'
import './static/fonts/MyriadPro-SemiCn.otf'
import './static/fonts/MyriadPro-Cond.otf'
import './static/fonts/MyriadPro-LightCond.otf'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { esES } from '@mui/material/locale';
import Musala from './router/Musala';

const theme = createTheme({
    overrides: {
      PrivateNotchedOutline:{
        legendLabelled:{
          //width: 'calc(8px + 93px * 0.75)',
          fontSize: '0.9rem',
        },
        legendNotched:{
          //width: 'calc(8px + 93px * 0.75)',
          fontSize: '0.9rem',
        }
    },
        MuiButton: {
            root: {
                //fontWeight: "bold",
                fontFamily: "MyriadPro-Cond",
                backgroundColor: "#000066",
                width: '140px',
                height: '40px',
                borderRadius: 'none',
                clipPath: 'polygon(100% 0, 100% 78%, 90% 100%, 0 100%, 0 0)',
                //margin: "10px",
                "&:hover": {
                backgroundColor: "#000066",
                color: '#3399cc',
                }
            },
          },
        MuiInput: {
            underline: {
              /*color: 'blue',//input color focus of not  
              backgroundColor:"grey !important",//background color of whole input 
              '&:hover:not($disabled):after': {
                backgroundColor: 'orange !important',//its when its hover and input is focused 
              },
              '&:hover:not($disabled):before': {
                backgroundColor: 'yellow !important',//its when you hover and input is not foucused 
              },
              '&:after': {
                backgroundColor: 'blue !important',//when input is focused, Its just for example. Its better to set this one using primary color
              },
              '&:before': {
                backgroundColor: 'red !important',// when input is not touched
              },*/
            },
            root: {
                fontFamily: "MyriadPro-SemiCn",
                
                /*borderRadius: 1,
                backgroundColor: "#fff",
                border: '1px solid pink',
                fontSize: 16,
                padding: '10px 12px',
                width: 'calc(100% - 24px)',*/

            },
          },
        MuiOutlinedInput: {
          root:{
            fontFamily: "MyriadPro-SemiCn",
            width: '260px',
            height: '42px',
            //fontSize: '6pt'
          }
        },
        MuiFormControl:{
          root:{
            // width:'260px',
            height: '42px',
            marginBottom: '15px !important',
            marginTop: '0',
          }
        },
        MuiAutocomplete:{
          root:{
            maxWidth:'260px',
            // height: '42px',
            // marginBottom: '15px !important',
          },
          endAdornment:{
            top: 'unset'
          }
        },
        MuiInputBase:{
          root:{
            //fontSize: '6pt'
          },
          input:{
            paddingBottom: '0px !important',
            paddingTop: '0px !important'
          },
        },
        MuiInputLabel:{
          outlined:{
            transform: 'translate(14px, 12px) scale(1)',
            '&$shrink': {
              transform: 'translate(11px, -6px) scale(0.75)',
            }
          },
        },
        MuiPickersToolbarButton:{
          toolbarBtn:{
            width: 'unset'
          }
        }
    },
    palette: {
        primary: {
            main: '#000066',//azul oscuro
            /*contrastText: '#ffffff',*/},
        secondary: {
            // 
            main: '#3399cc',//azul mas claro
          },
    },   
},esES,   
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate persistor={ persistor }>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Musala/>
                    </BrowserRouter>
                </ThemeProvider>
        </PersistGate>
    </Provider>

);
