import { Container, createTheme, LinearProgress, Table, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';


function CoinsTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();
  const {currency} = CryptoState();

  const fetchCoins = async () => {
    const {data}= await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(()=>{fetchCoins();},[currency]);

  const darkTheme = createTheme({
    palette:{
      primary:{
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme} >
      <Container style={{textAligh: "center"}}>
        <Typography
        variant='h4'
        style={{margin: 18, fontFamily: "Montserrat"}}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
        label="Search for a crypto Currency.." variant='outlined'
        style={{marginBottom: 20, width: "100%"}}
        onChange={(e)=> setSearch(e.target.value)}
        />
        <TableContainer>
          {
            loading?(
              <LinearProgress style={{backgroundColor: "gold"}}/>
            )  : (
              <Table>
                <TableHead style={{backgroundColor: "#EEBC1D"}}>
                  <TableRow>
                    {["Coin", "Price", "24h Change", "Market Cap"].map((head)=>(
                      <TableCell
                      style={{
                        color: "black",
                        fontWeight : "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      aligh={head=== "coin" ? "" : "right"}
                      >

                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
              </Table>
            )
          }
        </TableContainer>
      </Container>
    </ThemeProvider>
  )
}

export default CoinsTable
