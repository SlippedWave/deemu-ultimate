import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";

const MoralisBDQuery = () => {

    const { Moralis, isInitialized } = useMoralis();

    useEffect(() => { console.log(isInitialized) }, [])

    const [amountDonated, setAmountDonated] = React.useState('')

    if (isInitialized) {
        const Donations = Moralis.Object.extend("Charity");
        const query = new Moralis.Query(Donations);
        query.get('XK2rruWQF7Mr4Tkr1pSVBaMq').then(
            (res) => {
                console.log(res.get('amountDonated'));
                setAmountDonated(res.get('amountDonated')); 
            },
            (error) => {
                setAmountDonated('Mucho')
            }
        )
    }

    return (
        <Typography variant='h4'>
            {amountDonated} DMU
        </Typography>
    )
}

export default MoralisBDQuery;