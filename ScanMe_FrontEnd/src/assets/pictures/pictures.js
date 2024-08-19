// General pictures
import scanme_img from './generalpictures/scanme_img.png'
import suraj_img from './generalpictures/suraj_img.png'

//Menu Items pictures

//Breads
import butternaan from './MenuItems/Breads/ButterNaan/Butternaan.jpg'
import chapati from './MenuItems/Breads/Chapati/Chapathi.jpg'
import GarliccheeseNaan from './MenuItems/Breads/GarliccheeseNaan/GarliccheeseNaan.jpg'
import GarlicNaan from './MenuItems/Breads/GarlicNaan/GarlicNaan.jpg'
import kashmirnaan from './MenuItems/Breads/KashmiriNaan/KashmiriNaan.jpg'

//Beef
import BaltiGoshtBeef from './MenuItems/Beef/BaltiGoshtBeef/BaltiGoshtBeef.jpg'
import BeefMadras from './MenuItems/Beef/BeefMadras/BeefMadras.jpg'
import BeefRoganJosh from './MenuItems/Beef/BeefRoganJosh/BeefRoganJosh.jpg'
import BeefSagwala from './MenuItems/Beef/BeefSagwala/BeefSagwala.jpg'
import BeefShahiKorma from './MenuItems/Beef/BeefShahiKorma/BeefShahiKorma.jpg'
import BeefVindaloo from './MenuItems/Beef/BeefVindaloo/BeefVindaloo.jpg'

//Menu Items videos

//Breads
import butternaanshort from './MenuItems/Breads/ButterNaan/Butternaan.mp4'
import chapatishort from './MenuItems/Breads/Chapati/Chapathi.mp4'
import GarliccheeseNaanshort from './MenuItems/Breads/GarliccheeseNaan/GarliccheeseNaan.mp4'
import GarlicNaanshort from './MenuItems/Breads/GarlicNaan/GarlicNaan.mp4'
import kashmirnaanshort from './MenuItems/Breads/KashmiriNaan/KashmiriNaan.mp4'

//Beef
import BaltiGoshtBeefshort from './MenuItems/Beef/BaltiGoshtBeef/BaltiGoshtBeef.mp4'
import BeefMadrasshort from './MenuItems/Beef/BeefMadras/BeefMadras.mp4'
import BeefRoganJoshshort from './MenuItems/Beef/BeefRoganJosh/BeefRoganJosh.mp4'
import BeefSagwalashort from './MenuItems/Beef/BeefSagwala/BeefSagwala.mp4'
import BeefShahiKormashort from './MenuItems/Beef/BeefShahiKorma/BeefShahiKorma.mp4'
import BeefVindalooshort from './MenuItems/Beef/BeefVindaloo/BeefVindaloo.mp4'



export const generalpics = {
    scanme_img,
    suraj_img
}
export const menupics = {
    //Pictures

    //Breads
    butternaan,
    chapati,
    GarliccheeseNaan,
    GarlicNaan,
    kashmirnaan,
    //Beef
    BaltiGoshtBeef,
    BeefMadras,
    BeefRoganJosh,
    BeefSagwala,
    BeefShahiKorma,
    BeefVindaloo,
    
    //Shorts
    
    //Breads
    butternaanshort,
    chapatishort,
    GarliccheeseNaanshort,
    GarlicNaanshort,
    kashmirnaanshort,
    //Beef
    BaltiGoshtBeefshort,
    BeefMadrasshort,
    BeefRoganJoshshort,
    BeefSagwalashort,
    BeefShahiKormashort,
    BeefVindalooshort,


}
export const menuItems = [
    //Breads
    { id: 1, name: 'Butter Naan', calories: '460 Cal', price: '$2.49', video: butternaanshort, image: butternaan, desc: "Soft, buttery naan perfect for pairing with flavorful curries.",combinations:["Beef Madras", "Beef Rogan Josh","Beef Vindaloo"], category: "Naan" },

    { id: 2, name: 'Chapati', calories: '460 Cal', price: '$2.49', video: chapatishort, image: chapati, desc: "Thin, whole wheat flatbread, a staple in Indian cuisine.", category: "Naan" },

    { id: 3, name: 'Garlic cheese Naan', calories: '460 Cal', price: '$2.49', video: GarliccheeseNaanshort, image: GarliccheeseNaan, desc: " Fluffy naan stuffed with garlic and cheese, a savory delight.",combinations:["Beef Rogan Josh","Beef Madras", "Beef Vindaloo"], category: "Naan" },

    { id: 4, name: 'Garlic Naan', calories: '460 Cal', price: '$2.49', video: GarlicNaanshort, image: GarlicNaan, desc: "Traditional naan infused with garlic, ideal for enhancing any dish.", category: "Naan" },

    { id: 5, name: 'Kashmiri Naan', calories: '460 Cal', price: '$2.49', video: kashmirnaanshort, image: kashmirnaan, desc: "Sweet, nutty naan with dried fruits, a unique flavorful experience.", category: "Naan" },

    //Beef
    { id: 6, name: 'Balti Gosht Beef', calories: '460 Cal', price: '$2.49', video: BaltiGoshtBeefshort, image: BaltiGoshtBeef, desc: "Spicy beef curry cooked in a Balti-style pot, aromatic.", category: "Beef" },

    { id: 7, name: 'Beef Madras', calories: '460 Cal', price: '$2.49', video: BeefMadrasshort, image: BeefMadras, desc: "Fiery South Indian beef curry, rich with bold spices.", category: "Beef" },

    { id: 8, name: 'Beef Rogan Josh', calories: '460 Cal', price: '$2.49', video: BeefRoganJoshshort, image: BeefRoganJosh, desc: "Kashmiri-style beef curry, tender meat in a fragrant sauce.", category: "Beef" },

    { id: 9, name: 'Beef Sagwala', calories: '460 Cal', price: '$2.49', video: BeefSagwalashort, image: BeefSagwala, desc: "Creamy beef curry with spinach, a hearty and nutritious dish.", category: "Beef" },

    { id: 10, name: 'Beef Shahi Korma', calories: '460 Cal', price: '$2.49', video: BeefShahiKormashort, image: BeefShahiKorma, desc: "Mild, creamy beef curry with nuts and aromatic spices, luxurious.", category: "Beef" },

    { id: 11, name: 'Beef Vindaloo', calories: '460 Cal', price: '$2.49', video: BeefVindalooshort, image: BeefVindaloo, desc: "Spicy, tangy beef curry with vinegar and garlic, intensely flavorful.", category: "Beef" },

];