import Coins from './Coins.svelte'
import Coin from "./Coin.svelte";

export default {
    '/': Coins,
	'/:coinId': Coin, 
}