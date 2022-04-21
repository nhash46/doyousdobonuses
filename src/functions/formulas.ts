export function calcProfitBookieBonusBetSNR( backOdds: number, betStake: number, layOdds: number, layStake: number) {
    return ((backOdds - 1) * betStake) - ((layOdds - 1) * layStake);
}

export function calcProfitLayBetBonusBetSNR ( layStake: number, layCommission: number) {
    return (layStake * (1 - layCommission))
}

export function calcLayStakeBonusBetSNR ( backOdds: number, layOdds: number, layCommission: number, betStake: number ) {
    return ((backOdds - 1)/(layOdds - layCommission)) * betStake;
}

export function calcLiability( layStake: number,  layOdds: number) {
    return layStake * (layOdds - 1);
}