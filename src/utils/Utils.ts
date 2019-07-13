import { Path } from "../navigation/path";
import VOAttribute from "../VO/VOAttribute";
import VOCartItem from "../VO/VOCartItem";

export default class Utils {

    static GroupAttributesByName = (arr: VOAttribute[]) => {
        const result = arr.reduce((r, a) => {
            r[a.attribute_name] = r[a.attribute_name] || [];
            r[a.attribute_name].push(a);
            return r;
        }, Object.create(null));

        return result;
    }

    static GetProductsCount = (arr: VOCartItem[]) => {
        const result = arr.reduce((r, a) => {
            r = r + a.quantity;
            return r;
        }, 0);

        return result;
    }

    static GetSubTotalPrice = (item: VOCartItem) => {
        let result = (item.quantity * item.price).toFixed(2);
        return result;
    }

    static NeedProductsClean = (history: any) => {
        const pathName = history.location.pathname;
        if (pathName.indexOf(Path.product) !== -1 || pathName.indexOf(Path.shippingAddress) !== -1
            || pathName.indexOf(Path.shoppingCart) !== -1
            || pathName.indexOf(Path.profile) !== -1) {
            return true;
        }

        return false;
    }


    static GetTotalPrice = (arr: VOCartItem[]) => {
        const result = arr.reduce((r, a) => {
            r = r + (a.price * a.quantity);
            return r;
        }, 0);

        return result.toFixed(2);
    }


    static GetRandomInt = (max: number): number => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    static CutString = (pStr: string, maxLetters: number = 18, end: string = "..."): string => {
        if (!pStr) return "";

        let newStr: string = "";
        let strArr: string[] = pStr.split(" ");

        for (let i: number = 0; i < strArr.length; i++) {
            let str: string = strArr[i];

            if (str.length > maxLetters) {
                return str.substr(0, maxLetters) + end;
            }

            if (newStr.length < (maxLetters + 1) && (str.length + newStr.length) < (maxLetters + 1)) {
                newStr += " " + str;
            } else {
                newStr += end;
                return newStr;
            }
        }

        return newStr;
    }

}





