import { attributes } from "./api/attributes";
import { categories } from "./api/categories";
import { departments } from "./api/departments";
import { products } from "./api/products";
import { shipping } from "./api/shipping";
import { shoppingCart } from "./api/shoppingCart";
import { user } from "./api/user";


export const api = {
    setToken(token: string) {
        localStorage.setItem('turFrontentToken', token);
    },

    getToken(): string {
        return localStorage.getItem('turFrontentToken') || '';
    },

    setCardId(cardId: string) {
        localStorage.setItem('turFrontentCardId', cardId);
    },

    getCardId(): string {
        return localStorage.getItem('turFrontentCardId') || '';
    },

    removeToken() {
        localStorage.removeItem('turFrontentToken');
    },

    user,
    shipping,
    departments,
    categories,
    attributes,
    products,
    shoppingCart,
}

