export function profitBookieBonusBetSNR( backOdds: number, betStake: number, layOdds: number, layStake: number) {
    return (backOdds - 1) * betStake - (layOdds - 1) * layStake;
}

export function profitLayBetBonusBetSNR ( layStake: number, layCommission: number) {
    return layStake * (1 - layCommission)
}

export function layStakeBonusBetSNR ( backOdds: number, layOdds: number, layCommission: number, betStake: number ) {
    return (backOdds - 1)/(layOdds - layCommission) * betStake;
}

export function liability( layStake: number,  layOdds: number) {
    return layStake * (layOdds - 1);
}