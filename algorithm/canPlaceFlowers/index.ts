/**
 * @author Jack huan 最帅的坏兔子
 * @date 2021-05-15
 * @description 种花问题
 * @param {number[]} flowerbed 花坛
 * @param {number} n 花朵数
 * @return {boolean} 函数返回值
 */
export const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
    let num = 0;
    const size = flowerbed.length;
    for (let i = 0; i < size; i++) {
        const flower = flowerbed[i];
        if(flower === 0) {
            if(i === 0) {
                if(size > 1 && flowerbed[i + 1] === 0){
                    flowerbed[i] = 1;
                    ++num;
                }else if(size < 2){
                    ++num;
                }
            }else if(i === size - 1){
                if(flowerbed[i - 1] === 0) {
                    flowerbed[i] = 1;
                    ++num;
                }
            }else{
                if(flowerbed[i-1] === 0 && flowerbed[i+1] === 0){
                    flowerbed[i] = 1;
                    ++num;
                }
            }
            if(num > n - 1) return true;
        }
    }
    return num > n - 1;
}