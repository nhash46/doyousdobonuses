export function calcProfitBookieBonusBetSNR( backOdds: number, betStake: number, layOdds: number, layStake: number) {
    return Number(((backOdds - 1) * betStake) - ((layOdds - 1) * layStake)).toFixed(2);
}

export function calcProfitLayBetBonusBetSNR ( layStake: number, layCommission: number) {
    return (layStake * (1 - (layCommission/100)))
}

export function calcLayStakeBonusBetSNR ( backOdds: number, layOdds: number, layCommission: number, betStake: number ) {
    return ((backOdds - 1)/(layOdds - (layCommission/100))) * betStake;
}

export function calcLiability( layStake: number,  layOdds: number) {
    return layStake * (layOdds - 1);
}