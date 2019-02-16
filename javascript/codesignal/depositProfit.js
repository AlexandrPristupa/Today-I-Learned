export const depositProfit = (deposit, rate, threshold) => {
    let years = 0;
    let deposits = deposit;

    for(let i = 0; deposits < threshold; i++) {
        let num = deposits * rate / 100;
        deposits += num;
        years++
    }

    return years;
};

depositProfit(100, 20, 170);
