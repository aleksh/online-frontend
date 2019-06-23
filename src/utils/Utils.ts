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
        if (history.location.pathname.indexOf(Path.product) !== -1 || history.location.pathname.indexOf(Path.shippingAddress) !== -1
            || history.location.pathname.indexOf(Path.shoppingCart) !== -1) {
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

    static IsImageFile = (fileName: string) => {
        var extension = fileName.substr((fileName.lastIndexOf('.') + 1))
        if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
            return true;
        } else {
            return false;
        }
    }

    static GetImageExtensions = (fileName: string) => {
        return fileName.substr((fileName.lastIndexOf('.') + 1))
    }

    static GetResizedImage = (file: any, maxWidth: number, maxHeight: number) => {

        return new Promise(resolve => {
            const reader = new FileReader();

            reader.onload = () => {
                var image = new Image();
                image.onload = () => {
                    resolve(Utils.ResizeImage(
                        image,
                        maxWidth,
                        maxHeight
                    ));

                };
                image.src = String(reader.result);
            };
            reader.readAsDataURL(file);
        });
    }

    static ResizeImage(image: any, maxWidth: number, maxHeight: number, quality: number = 1) {
        const canvas = document.createElement('canvas');
        let width = image.width;
        let height = image.height;

        if (width > height) {
            if (width > maxWidth) {
                height = Math.round(height * maxWidth / width);
                width = maxWidth;
            }
        } else {
            if (height > maxHeight) {
                width = Math.round(width * maxHeight / height);
                height = maxHeight;
            }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;
        ctx.drawImage(image, 0, 0, width, height);


        return canvas.toDataURL("image/jpeg", quality);
    }
}





