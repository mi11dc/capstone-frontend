import { RouteInfo } from '../models/global.model';

export const Constants = {
    limitOptions: [
        { value: 5 },
        { value: 10 },
        { value: 20 },
        { value: 50 },
        { value: 100 },
        { value: 500 }
    ],
    ROUTES: [
        {
            id: 1,
            path: '/dashboard',
            title: 'Dashboard',
            type: 'link',
            icontype: 'nc-icon nc-bank'
        }, {
            id: 2,
            path: '/users',
            title: 'Users',
            type: 'link',
            icontype: 'nc-icon nc-single-02'
        }, {
            id: 3,
            path: '/posts',
            title: 'Posts',
            type: 'link',
            icontype: 'nc-icon nc-paper'
        }, {
            id: 4,
            path: '/staff',
            title: 'Staff management',
            type: 'sub',
            collapse: 'staff',
            icontype: 'nc-icon nc-laptop',
            children: [
                { path: 'list', title: 'View members', ab:'V' },
                { path: 'create', title: 'Create member', ab:'C' }
            ]
        }, {
            id: 5,
            path: '/tickets',
            title: 'Tickets',
            type: 'link',
            icontype: 'nc-icon nc-email-85'
        }, {
            id: 6,
            path: '/reports',
            title: 'Reports',
            type: 'link',
            icontype: 'nc-icon nc-chart-pie-36'
        }, {
            id: 7,
            path: '/settings',
            title: 'Settings',
            type: 'sub',
            collapse: 'settings',
            icontype: 'nc-icon nc-settings-gear-65',
            children: [
                { path: 'chat-categories', title: 'Chat categories', ab: 'CC' },
                { path: 'abusive-words', title: 'Abusive words', ab:'AW' },
                { path: 'expression-icons', title: 'Expression Icons', ab:'EI' },
                { path: 'cl-post', title: 'CL Post', ab:'CP' },
                { path: 'plan-amount', title: 'Plan Amount', ab:'PA' },
                { path: 'faq', title: 'FAQ', ab:'FAQ' }
            ]
        }
    ]
    // ,
    // reaction: [
    //     {
    //         reactionId: 1,
    //         description: "one star",
    //         isForPost: true,
    //         isForComment: false,
    //         isForCommentReply: false,
    //         image: "https://conscia-link-data.s3.eu-west-2.amazonaws.com/reactions/one-star.png"
    //     },
    //     {
    //         reactionId: 2,
    //         description: "two star",
    //         isForPost: true,
    //         isForComment: false,
    //         isForCommentReply: false,
    //         image: "https://conscia-link-data.s3.eu-west-2.amazonaws.com/reactions/two-star.png"
    //     },
    //     {
    //         reactionId: 3,
    //         description: "three star",
    //         isForPost: true,
    //         isForComment: false,
    //         isForCommentReply: false,
    //         image: "https://conscia-link-data.s3.eu-west-2.amazonaws.com/reactions/three-star.png"
    //     },
    //     {
    //         reactionId: 4,
    //         description: "four star",
    //         isForPost: true,
    //         isForComment: false,
    //         isForCommentReply: false,
    //         image: "https://conscia-link-data.s3.eu-west-2.amazonaws.com/reactions/four-star.png"
    //     },
    //     {
    //         reactionId: 5,
    //         description: "five star",
    //         isForPost: true,
    //         isForComment: false,
    //         isForCommentReply: false,
    //         image: "https://conscia-link-data.s3.eu-west-2.amazonaws.com/reactions/five-star.png"
    //     }
    // ],
    // countries: [
    //     {
    //         "countryId": 1,
    //         "name": "Afghanistan",
    //         "iso2": "AF",
    //         "iso3": "AFG",
    //         "code": "+93",
    //         "flag": "https://www.countryareacode.net/pictures/flag/AFG.png"
    //     },
    //     {
    //         "countryId": 2,
    //         "name": "Albania",
    //         "iso2": "AL",
    //         "iso3": "ALB",
    //         "code": "+355",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ALB.png"
    //     },
    //     {
    //         "countryId": 3,
    //         "name": "Algeria",
    //         "iso2": "DZ",
    //         "iso3": "DZA",
    //         "code": "+213",
    //         "flag": "https://www.countryareacode.net/pictures/flag/DZA.png"
    //     },
    //     {
    //         "countryId": 4,
    //         "name": "American Samoa",
    //         "iso2": "AS",
    //         "iso3": "ASM",
    //         "code": "+1 684",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ASM.png"
    //     },
    //     {
    //         "countryId": 5,
    //         "name": "Andorra",
    //         "iso2": "AD",
    //         "iso3": "AND",
    //         "code": "+376",
    //         "flag": "https://www.countryareacode.net/pictures/flag/AND.png"
    //     },
    //     {
    //         "countryId": 6,
    //         "name": "Angola",
    //         "iso2": "AO",
    //         "iso3": "AGO",
    //         "code": "+244",
    //         "flag": "https://www.countryareacode.net/pictures/flag/AGO.png"
    //     },
    //     {
    //         "countryId": 7,
    //         "name": "Anguilla",
    //         "iso2": "AI",
    //         "iso3": "AIA",
    //         "code": "+1 264",
    //         "flag": "https://www.countryareacode.net/pictures/flag/AIA.png"
    //     },
    //     {
    //         "countryId": 8,
    //         "name": "Antarctica",
    //         "iso2": "AQ",
    //         "iso3": "ATA",
    //         "code": "+672",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ATA.png"
    //     },
    //     {
    //         "countryId": 9,
    //         "name": "Argentina",
    //         "iso2": "AR",
    //         "iso3": "ARG",
    //         "code": "+54",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ARG.png"
    //     },
    //     {
    //         "countryId": 10,
    //         "name": "Armenia",
    //         "iso2": "AM",
    //         "iso3": "ARM",
    //         "code": "+374",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ARM.png"
    //     },
    //     {
    //         "countryId": 11,
    //         "name": "Aruba",
    //         "iso2": "AW",
    //         "iso3": "ABW",
    //         "code": "+297",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ABW.png"
    //     },
    //     {
    //         "countryId": 12,
    //         "name": "Australia",
    //         "iso2": "AU",
    //         "iso3": "AUS",
    //         "code": "+61",
    //         "flag": "https://www.countryareacode.net/pictures/flag/AUS.png"
    //     },
    //     {
    //         "countryId": 13,
    //         "name": "Austria",
    //         "iso2": "AT",
    //         "iso3": "AUT",
    //         "code": "+43",
    //         "flag": "https://www.countryareacode.net/pictures/flag/AUT.png"
    //     },
    //     {
    //         "countryId": 14,
    //         "name": "Azerbaijan",
    //         "iso2": "AZ",
    //         "iso3": "AZE",
    //         "code": "+994",
    //         "flag": "https://www.countryareacode.net/pictures/flag/AZE.png"
    //     },
    //     {
    //         "countryId": 15,
    //         "name": "Bahamas",
    //         "iso2": "BS",
    //         "iso3": "BHS",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BHS.png"
    //     },
    //     {
    //         "countryId": 16,
    //         "name": "Bahrain",
    //         "iso2": "BH",
    //         "iso3": "BHR",
    //         "code": "+973",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BHR.png"
    //     },
    //     {
    //         "countryId": 17,
    //         "name": "Bangladesh",
    //         "iso2": "BD",
    //         "iso3": "BGD",
    //         "code": "+880",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BGD.png"
    //     },
    //     {
    //         "countryId": 18,
    //         "name": "Barbados",
    //         "iso2": "BB",
    //         "iso3": "BRB",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BRB.png"
    //     },
    //     {
    //         "countryId": 19,
    //         "name": "Belarus",
    //         "iso2": "BY",
    //         "iso3": "BLR",
    //         "code": "+375",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BLR.png"
    //     },
    //     {
    //         "countryId": 20,
    //         "name": "Belgium",
    //         "iso2": "BE",
    //         "iso3": "BEL",
    //         "code": "+32",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BEL.png"
    //     },
    //     {
    //         "countryId": 21,
    //         "name": "Belize",
    //         "iso2": "BZ",
    //         "iso3": "BLZ",
    //         "code": "+501",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BLZ.png"
    //     },
    //     {
    //         "countryId": 22,
    //         "name": "Benin",
    //         "iso2": "BJ",
    //         "iso3": "BEN",
    //         "code": "+229",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BEN.png"
    //     },
    //     {
    //         "countryId": 23,
    //         "name": "Bermuda",
    //         "iso2": "BM",
    //         "iso3": "BMU",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BMU.png"
    //     },
    //     {
    //         "countryId": 24,
    //         "name": "Bhutan",
    //         "iso2": "BT",
    //         "iso3": "BTN",
    //         "code": "+975",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BTN.png"
    //     },
    //     {
    //         "countryId": 25,
    //         "name": "Bolivia",
    //         "iso2": "BO",
    //         "iso3": "BOL",
    //         "code": "+591",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BOL.png"
    //     },
    //     {
    //         "countryId": 26,
    //         "name": "Bosnia and Herzegovina",
    //         "iso2": "BA",
    //         "iso3": "BIH",
    //         "code": "+387",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BIH.png"
    //     },
    //     {
    //         "countryId": 27,
    //         "name": "Botswana",
    //         "iso2": "BW",
    //         "iso3": "BWA",
    //         "code": "+267",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BWA.png"
    //     },
    //     {
    //         "countryId": 28,
    //         "name": "Brazil",
    //         "iso2": "BR",
    //         "iso3": "BRA",
    //         "code": "+55",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BRA.png"
    //     },
    //     {
    //         "countryId": 29,
    //         "name": "British Virgin Islands",
    //         "iso2": "VG",
    //         "iso3": "VGB",
    //         "code": "+1 284",
    //         "flag": "https://www.countryareacode.net/pictures/flag/VGB.png"
    //     },
    //     {
    //         "countryId": 30,
    //         "name": "Brunei",
    //         "iso2": "BN",
    //         "iso3": "BRN",
    //         "code": "+673",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BRN.png"
    //     },
    //     {
    //         "countryId": 31,
    //         "name": "Bulgaria",
    //         "iso2": "BG",
    //         "iso3": "BGR",
    //         "code": "+359",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BGR.png"
    //     },
    //     {
    //         "countryId": 32,
    //         "name": "Burkina Faso",
    //         "iso2": "BF",
    //         "iso3": "BFA",
    //         "code": "+226",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BFA.png"
    //     },
    //     {
    //         "countryId": 33,
    //         "name": "Burundi",
    //         "iso2": "BI",
    //         "iso3": "BDI",
    //         "code": "+257",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BDI.png"
    //     },
    //     {
    //         "countryId": 34,
    //         "name": "Cambodia",
    //         "iso2": "KH",
    //         "iso3": "KHM",
    //         "code": "+855",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KHM.png"
    //     },
    //     {
    //         "countryId": 35,
    //         "name": "Cameroon",
    //         "iso2": "CM",
    //         "iso3": "CMR",
    //         "code": "+237",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CMR.png"
    //     },
    //     {
    //         "countryId": 36,
    //         "name": "Canada",
    //         "iso2": "CA",
    //         "iso3": "CAN",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CAN.png"
    //     },
    //     {
    //         "countryId": 37,
    //         "name": "Cape Verde",
    //         "iso2": "CV",
    //         "iso3": "CPV",
    //         "code": "+238",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CPV.png"
    //     },
    //     {
    //         "countryId": 38,
    //         "name": "Cayman Islands",
    //         "iso2": "KY",
    //         "iso3": "CYM",
    //         "code": "+1-345",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CYM.png"
    //     },
    //     {
    //         "countryId": 39,
    //         "name": "Central African Republic",
    //         "iso2": "CF",
    //         "iso3": "CAF",
    //         "code": "+236",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CAF.png"
    //     },
    //     {
    //         "countryId": 40,
    //         "name": "Chile",
    //         "iso2": "CL",
    //         "iso3": "CHL",
    //         "code": "+56",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CHL.png"
    //     },
    //     {
    //         "countryId": 41,
    //         "name": "China",
    //         "iso2": "CN",
    //         "iso3": "CHN",
    //         "code": "+86",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CHN.png"
    //     },
    //     {
    //         "countryId": 42,
    //         "name": "Colombia",
    //         "iso2": "CO",
    //         "iso3": "COL",
    //         "code": "+57",
    //         "flag": "https://www.countryareacode.net/pictures/flag/COL.png"
    //     },
    //     {
    //         "countryId": 43,
    //         "name": "Comoros",
    //         "iso2": "KM",
    //         "iso3": "COM",
    //         "code": "+269",
    //         "flag": "https://www.countryareacode.net/pictures/flag/COM.png"
    //     },
    //     {
    //         "countryId": 44,
    //         "name": "Cook Islands",
    //         "iso2": "CK",
    //         "iso3": "COK",
    //         "code": "+682",
    //         "flag": "https://www.countryareacode.net/pictures/flag/COK.png"
    //     },
    //     {
    //         "countryId": 45,
    //         "name": "Costa Rica",
    //         "iso2": "CR",
    //         "iso3": "CRI",
    //         "code": "+506",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CRI.png"
    //     },
    //     {
    //         "countryId": 46,
    //         "name": "Croatia",
    //         "iso2": "HR",
    //         "iso3": "HRV",
    //         "code": "+385",
    //         "flag": "https://www.countryareacode.net/pictures/flag/HRV.png"
    //     },
    //     {
    //         "countryId": 47,
    //         "name": "Cuba",
    //         "iso2": "CU",
    //         "iso3": "CUB",
    //         "code": "+53",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CUB.png"
    //     },
    //     {
    //         "countryId": 48,
    //         "name": "Curacao",
    //         "iso2": "CW",
    //         "iso3": "CUW",
    //         "code": "+599",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CUW.png"
    //     },
    //     {
    //         "countryId": 49,
    //         "name": "Cyprus",
    //         "iso2": "CY",
    //         "iso3": "CYP",
    //         "code": "+357",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CYP.png"
    //     },
    //     {
    //         "countryId": 50,
    //         "name": "Czech Republic",
    //         "iso2": "CZ",
    //         "iso3": "CZE",
    //         "code": "+420",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CZE.png"
    //     },
    //     {
    //         "countryId": 51,
    //         "name": "Democratic Republic of Congo",
    //         "iso2": "CD",
    //         "iso3": "COD",
    //         "code": "+243",
    //         "flag": "https://www.countryareacode.net/pictures/flag/COD.png"
    //     },
    //     {
    //         "countryId": 52,
    //         "name": "Denmark",
    //         "iso2": "DK",
    //         "iso3": "DNK",
    //         "code": "+45",
    //         "flag": "https://www.countryareacode.net/pictures/flag/DNK.png"
    //     },
    //     {
    //         "countryId": 53,
    //         "name": "Djibouti",
    //         "iso2": "DJ",
    //         "iso3": "DJI",
    //         "code": "+253",
    //         "flag": "https://www.countryareacode.net/pictures/flag/DJI.png"
    //     },
    //     {
    //         "countryId": 54,
    //         "name": "Dominica",
    //         "iso2": "DM",
    //         "iso3": "DMA",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/DMA.png"
    //     },
    //     {
    //         "countryId": 55,
    //         "name": "Dominican Republic",
    //         "iso2": "DO",
    //         "iso3": "DOM",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/DOM.png"
    //     },
    //     {
    //         "countryId": 56,
    //         "name": "East Timor",
    //         "iso2": "TL",
    //         "iso3": "TLS",
    //         "code": "+670",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TLS.png"
    //     },
    //     {
    //         "countryId": 57,
    //         "name": "Ecuador",
    //         "iso2": "EC",
    //         "iso3": "ECU",
    //         "code": "+593",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ECU.png"
    //     },
    //     {
    //         "countryId": 58,
    //         "name": "Egypt",
    //         "iso2": "EG",
    //         "iso3": "EGY",
    //         "code": "+20",
    //         "flag": "https://www.countryareacode.net/pictures/flag/EGY.png"
    //     },
    //     {
    //         "countryId": 59,
    //         "name": "El Salvador",
    //         "iso2": "SV",
    //         "iso3": "SLV",
    //         "code": "+503",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SLV.png"
    //     },
    //     {
    //         "countryId": 60,
    //         "name": "Equatorial Guinea",
    //         "iso2": "GQ",
    //         "iso3": "GNQ",
    //         "code": "+240",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GNQ.png"
    //     },
    //     {
    //         "countryId": 61,
    //         "name": "Eritrea",
    //         "iso2": "ER",
    //         "iso3": "ERI",
    //         "code": "+291",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ERI.png"
    //     },
    //     {
    //         "countryId": 62,
    //         "name": "Estonia",
    //         "iso2": "EE",
    //         "iso3": "EST",
    //         "code": "+372",
    //         "flag": "https://www.countryareacode.net/pictures/flag/EST.png"
    //     },
    //     {
    //         "countryId": 63,
    //         "name": "Ethiopia",
    //         "iso2": "ET",
    //         "iso3": "ETH",
    //         "code": "+251",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ETH.png"
    //     },
    //     {
    //         "countryId": 64,
    //         "name": "Falkland Islands",
    //         "iso2": "FK",
    //         "iso3": "FLK",
    //         "code": "+500",
    //         "flag": "https://www.countryareacode.net/pictures/flag/FLK.png"
    //     },
    //     {
    //         "countryId": 65,
    //         "name": "Faroe Islands",
    //         "iso2": "FO",
    //         "iso3": "FRO",
    //         "code": "+298",
    //         "flag": "https://www.countryareacode.net/pictures/flag/FRO.png"
    //     },
    //     {
    //         "countryId": 66,
    //         "name": "Fiji",
    //         "iso2": "FJ",
    //         "iso3": "FJI",
    //         "code": "+679",
    //         "flag": "https://www.countryareacode.net/pictures/flag/FJI.png"
    //     },
    //     {
    //         "countryId": 67,
    //         "name": "Finland",
    //         "iso2": "FI",
    //         "iso3": "FIN",
    //         "code": "+358",
    //         "flag": "https://www.countryareacode.net/pictures/flag/FIN.png"
    //     },
    //     {
    //         "countryId": 68,
    //         "name": "France",
    //         "iso2": "FR",
    //         "iso3": "FRA",
    //         "code": "+33",
    //         "flag": "https://www.countryareacode.net/pictures/flag/FRA.png"
    //     },
    //     {
    //         "countryId": 69,
    //         "name": "French Polynesia",
    //         "iso2": "PF",
    //         "iso3": "PYF",
    //         "code": "+689",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PYF.png"
    //     },
    //     {
    //         "countryId": 70,
    //         "name": "Gabon",
    //         "iso2": "GA",
    //         "iso3": "GAB",
    //         "code": "+241",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GAB.png"
    //     },
    //     {
    //         "countryId": 71,
    //         "name": "Gambia",
    //         "iso2": "GM",
    //         "iso3": "GMB",
    //         "code": "+220",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GMB.png"
    //     },
    //     {
    //         "countryId": 72,
    //         "name": "Georgia",
    //         "iso2": "GE",
    //         "iso3": "GEO",
    //         "code": "+995",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GEO.png"
    //     },
    //     {
    //         "countryId": 73,
    //         "name": "Germany",
    //         "iso2": "DE",
    //         "iso3": "DEU",
    //         "code": "+49",
    //         "flag": "https://www.countryareacode.net/pictures/flag/DEU.png"
    //     },
    //     {
    //         "countryId": 74,
    //         "name": "Ghana",
    //         "iso2": "GH",
    //         "iso3": "GHA",
    //         "code": "+233",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GHA.png"
    //     },
    //     {
    //         "countryId": 75,
    //         "name": "Gibraltar",
    //         "iso2": "GI",
    //         "iso3": "GIB",
    //         "code": "+350",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GIB.png"
    //     },
    //     {
    //         "countryId": 76,
    //         "name": "Greece",
    //         "iso2": "GR",
    //         "iso3": "GRC",
    //         "code": "+30",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GRC.png"
    //     },
    //     {
    //         "countryId": 77,
    //         "name": "Greenland",
    //         "iso2": "GL",
    //         "iso3": "GRL",
    //         "code": "+299",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GRL.png"
    //     },
    //     {
    //         "countryId": 78,
    //         "name": "Guadeloupe",
    //         "iso2": "GP",
    //         "iso3": "GLP",
    //         "code": "+590",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GLP.png"
    //     },
    //     {
    //         "countryId": 79,
    //         "name": "Guam",
    //         "iso2": "GU",
    //         "iso3": "GUM",
    //         "code": "+1 671",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GUM.png"
    //     },
    //     {
    //         "countryId": 80,
    //         "name": "Guatemala",
    //         "iso2": "GT",
    //         "iso3": "GTM",
    //         "code": "+502",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GTM.png"
    //     },
    //     {
    //         "countryId": 81,
    //         "name": "Guinea",
    //         "iso2": "GN",
    //         "iso3": "GIN",
    //         "code": "+224",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GIN.png"
    //     },
    //     {
    //         "countryId": 82,
    //         "name": "Guinea-Bissau",
    //         "iso2": "GW",
    //         "iso3": "GNB",
    //         "code": "+245",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GNB.png"
    //     },
    //     {
    //         "countryId": 83,
    //         "name": "Guyana",
    //         "iso2": "GY",
    //         "iso3": "GUY",
    //         "code": "+592",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GUY.png"
    //     },
    //     {
    //         "countryId": 84,
    //         "name": "Haiti",
    //         "iso2": "HT",
    //         "iso3": "HTI",
    //         "code": "+509",
    //         "flag": "https://www.countryareacode.net/pictures/flag/HTI.png"
    //     },
    //     {
    //         "countryId": 85,
    //         "name": "Honduras",
    //         "iso2": "HN",
    //         "iso3": "HND",
    //         "code": "+504",
    //         "flag": "https://www.countryareacode.net/pictures/flag/HND.png"
    //     },
    //     {
    //         "countryId": 86,
    //         "name": "Hong Kong",
    //         "iso2": "HK",
    //         "iso3": "HKG",
    //         "code": "+852",
    //         "flag": "https://www.countryareacode.net/pictures/flag/HKG.png"
    //     },
    //     {
    //         "countryId": 87,
    //         "name": "Hungary",
    //         "iso2": "HU",
    //         "iso3": "HUN",
    //         "code": "+36",
    //         "flag": "https://www.countryareacode.net/pictures/flag/HUN.png"
    //     },
    //     {
    //         "countryId": 88,
    //         "name": "Iceland",
    //         "iso2": "IS",
    //         "iso3": "ISL",
    //         "code": "+354",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ISL.png"
    //     },
    //     {
    //         "countryId": 89,
    //         "name": "India",
    //         "iso2": "IN",
    //         "iso3": "IND",
    //         "code": "+91",
    //         "flag": "https://www.countryareacode.net/pictures/flag/IND.png"
    //     },
    //     {
    //         "countryId": 90,
    //         "name": "Indonesia",
    //         "iso2": "ID",
    //         "iso3": "IDN",
    //         "code": "+62",
    //         "flag": "https://www.countryareacode.net/pictures/flag/IDN.png"
    //     },
    //     {
    //         "countryId": 91,
    //         "name": "Iran",
    //         "iso2": "IR",
    //         "iso3": "IRN",
    //         "code": "+98",
    //         "flag": "https://www.countryareacode.net/pictures/flag/IRN.png"
    //     },
    //     {
    //         "countryId": 92,
    //         "name": "Iraq",
    //         "iso2": "IQ",
    //         "iso3": "IRQ",
    //         "code": "+964",
    //         "flag": "https://www.countryareacode.net/pictures/flag/IRQ.png"
    //     },
    //     {
    //         "countryId": 93,
    //         "name": "Ireland",
    //         "iso2": "IE",
    //         "iso3": "IRL",
    //         "code": "+353",
    //         "flag": "https://www.countryareacode.net/pictures/flag/IRL.png"
    //     },
    //     {
    //         "countryId": 94,
    //         "name": "Isle of Man",
    //         "iso2": "IM",
    //         "iso3": "IMN",
    //         "code": "+44",
    //         "flag": "https://www.countryareacode.net/pictures/flag/IMN.png"
    //     },
    //     {
    //         "countryId": 95,
    //         "name": "Israel",
    //         "iso2": "IL",
    //         "iso3": "ISR",
    //         "code": "+972",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ISR.png"
    //     },
    //     {
    //         "countryId": 96,
    //         "name": "Italy",
    //         "iso2": "IT",
    //         "iso3": "ITA",
    //         "code": "+39",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ITA.png"
    //     },
    //     {
    //         "countryId": 97,
    //         "name": "Ivory Coast",
    //         "iso2": "CI",
    //         "iso3": "CIV",
    //         "code": "+225",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CIV.png"
    //     },
    //     {
    //         "countryId": 98,
    //         "name": "Jamaica",
    //         "iso2": "JM",
    //         "iso3": "JAM",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/JAM.png"
    //     },
    //     {
    //         "countryId": 99,
    //         "name": "Japan",
    //         "iso2": "JP",
    //         "iso3": "JPN",
    //         "code": "+81",
    //         "flag": "https://www.countryareacode.net/pictures/flag/JPN.png"
    //     },
    //     {
    //         "countryId": 100,
    //         "name": "Jordan",
    //         "iso2": "JO",
    //         "iso3": "JOR",
    //         "code": "+962",
    //         "flag": "https://www.countryareacode.net/pictures/flag/JOR.png"
    //     },
    //     {
    //         "countryId": 101,
    //         "name": "Kazakhstan",
    //         "iso2": "KZ",
    //         "iso3": "KAZ",
    //         "code": "+7",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KAZ.png"
    //     },
    //     {
    //         "countryId": 102,
    //         "name": "Kenya",
    //         "iso2": "KE",
    //         "iso3": "KEN",
    //         "code": "+254",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KEN.png"
    //     },
    //     {
    //         "countryId": 103,
    //         "name": "Kiribati",
    //         "iso2": "KI",
    //         "iso3": "KIR",
    //         "code": "+686",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KIR.png"
    //     },
    //     {
    //         "countryId": 104,
    //         "name": "Kosovo",
    //         "iso2": "XK",
    //         "iso3": "XKX",
    //         "code": "+381",
    //         "flag": "https://www.countryareacode.net/pictures/flag/XKX.png"
    //     },
    //     {
    //         "countryId": 105,
    //         "name": "Kuwait",
    //         "iso2": "KW",
    //         "iso3": "KWT",
    //         "code": "+965",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KWT.png"
    //     },
    //     {
    //         "countryId": 106,
    //         "name": "Kyrgyzstan",
    //         "iso2": "KG",
    //         "iso3": "KGZ",
    //         "code": "+996",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KGZ.png"
    //     },
    //     {
    //         "countryId": 107,
    //         "name": "Laos",
    //         "iso2": "LA",
    //         "iso3": "LAO",
    //         "code": "+856",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LAO.png"
    //     },
    //     {
    //         "countryId": 108,
    //         "name": "Latvia",
    //         "iso2": "LV",
    //         "iso3": "LVA",
    //         "code": "+371",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LVA.png"
    //     },
    //     {
    //         "countryId": 109,
    //         "name": "Lebanon",
    //         "iso2": "LB",
    //         "iso3": "LBN",
    //         "code": "+961",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LBN.png"
    //     },
    //     {
    //         "countryId": 110,
    //         "name": "Lesotho",
    //         "iso2": "LS",
    //         "iso3": "LSO",
    //         "code": "+266",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LSO.png"
    //     },
    //     {
    //         "countryId": 111,
    //         "name": "Liberia",
    //         "iso2": "LR",
    //         "iso3": "LBR",
    //         "code": "+231",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LBR.png"
    //     },
    //     {
    //         "countryId": 112,
    //         "name": "Libya",
    //         "iso2": "LY",
    //         "iso3": "LBY",
    //         "code": "+218",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LBY.png"
    //     },
    //     {
    //         "countryId": 113,
    //         "name": "Liechtenstein",
    //         "iso2": "LI",
    //         "iso3": "LIE",
    //         "code": "+423",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LIE.png"
    //     },
    //     {
    //         "countryId": 114,
    //         "name": "Lithuania",
    //         "iso2": "LT",
    //         "iso3": "LTU",
    //         "code": "+370",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LTU.png"
    //     },
    //     {
    //         "countryId": 115,
    //         "name": "Luxembourg",
    //         "iso2": "LU",
    //         "iso3": "LUX",
    //         "code": "+352",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LUX.png"
    //     },
    //     {
    //         "countryId": 116,
    //         "name": "Macau",
    //         "iso2": "MO",
    //         "iso3": "MAC",
    //         "code": "+853",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MAC.png"
    //     },
    //     {
    //         "countryId": 117,
    //         "name": "Macedonia",
    //         "iso2": "MK",
    //         "iso3": "MKD",
    //         "code": "+389",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MKD.png"
    //     },
    //     {
    //         "countryId": 118,
    //         "name": "Madagascar",
    //         "iso2": "MG",
    //         "iso3": "MDG",
    //         "code": "+261",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MDG.png"
    //     },
    //     {
    //         "countryId": 119,
    //         "name": "Malawi",
    //         "iso2": "MW",
    //         "iso3": "MWI",
    //         "code": "+265",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MWI.png"
    //     },
    //     {
    //         "countryId": 120,
    //         "name": "Malaysia",
    //         "iso2": "MY",
    //         "iso3": "MYS",
    //         "code": "+60",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MYS.png"
    //     },
    //     {
    //         "countryId": 121,
    //         "name": "Maldives",
    //         "iso2": "MV",
    //         "iso3": "MDV",
    //         "code": "+960",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MDV.png"
    //     },
    //     {
    //         "countryId": 122,
    //         "name": "Mali",
    //         "iso2": "ML",
    //         "iso3": "MLI",
    //         "code": "+223",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MLI.png"
    //     },
    //     {
    //         "countryId": 123,
    //         "name": "Malta",
    //         "iso2": "MT",
    //         "iso3": "MLT",
    //         "code": "+356",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MLT.png"
    //     },
    //     {
    //         "countryId": 124,
    //         "name": "Marshall Islands",
    //         "iso2": "MH",
    //         "iso3": "MHL",
    //         "code": "+692",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MHL.png"
    //     },
    //     {
    //         "countryId": 125,
    //         "name": "Mauritania",
    //         "iso2": "MR",
    //         "iso3": "MRT",
    //         "code": "+222",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MRT.png"
    //     },
    //     {
    //         "countryId": 126,
    //         "name": "Mauritius",
    //         "iso2": "MU",
    //         "iso3": "MUS",
    //         "code": "+230",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MUS.png"
    //     },
    //     {
    //         "countryId": 127,
    //         "name": "Mexico",
    //         "iso2": "MX",
    //         "iso3": "MEX",
    //         "code": "+52",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MEX.png"
    //     },
    //     {
    //         "countryId": 128,
    //         "name": "Micronesia",
    //         "iso2": "FM",
    //         "iso3": "FSM",
    //         "code": "+691",
    //         "flag": "https://www.countryareacode.net/pictures/flag/FSM.png"
    //     },
    //     {
    //         "countryId": 129,
    //         "name": "Moldova",
    //         "iso2": "MD",
    //         "iso3": "MDA",
    //         "code": "+373",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MDA.png"
    //     },
    //     {
    //         "countryId": 130,
    //         "name": "Monaco",
    //         "iso2": "MC",
    //         "iso3": "MCO",
    //         "code": "+377",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MCO.png"
    //     },
    //     {
    //         "countryId": 131,
    //         "name": "Mongolia",
    //         "iso2": "MN",
    //         "iso3": "MNG",
    //         "code": "+976",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MNG.png"
    //     },
    //     {
    //         "countryId": 132,
    //         "name": "Montenegro",
    //         "iso2": "ME",
    //         "iso3": "MNE",
    //         "code": "+382",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MNE.png"
    //     },
    //     {
    //         "countryId": 133,
    //         "name": "Montserrat",
    //         "iso2": "MS",
    //         "iso3": "MSR",
    //         "code": "+1 664",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MSR.png"
    //     },
    //     {
    //         "countryId": 134,
    //         "name": "Morocco",
    //         "iso2": "MA",
    //         "iso3": "MAR",
    //         "code": "+212",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MAR.png"
    //     },
    //     {
    //         "countryId": 135,
    //         "name": "Mozambique",
    //         "iso2": "MZ",
    //         "iso3": "MOZ",
    //         "code": "+258",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MOZ.png"
    //     },
    //     {
    //         "countryId": 136,
    //         "name": "Myanmar [Burma]",
    //         "iso2": "MM",
    //         "iso3": "MMR",
    //         "code": "+95",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MMR.png"
    //     },
    //     {
    //         "countryId": 137,
    //         "name": "Namibia",
    //         "iso2": "NA",
    //         "iso3": "NAM",
    //         "code": "+264",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NAM.png"
    //     },
    //     {
    //         "countryId": 138,
    //         "name": "Nauru",
    //         "iso2": "NR",
    //         "iso3": "NRU",
    //         "code": "+674",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NRU.png"
    //     },
    //     {
    //         "countryId": 139,
    //         "name": "Nepal",
    //         "iso2": "NP",
    //         "iso3": "NPL",
    //         "code": "+977",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NPL.png"
    //     },
    //     {
    //         "countryId": 140,
    //         "name": "Netherlands",
    //         "iso2": "NL",
    //         "iso3": "NLD",
    //         "code": "+31",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NLD.png"
    //     },
    //     {
    //         "countryId": 141,
    //         "name": "New Caledonia",
    //         "iso2": "NC",
    //         "iso3": "NCL",
    //         "code": "+687",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NCL.png"
    //     },
    //     {
    //         "countryId": 142,
    //         "name": "New Zealand",
    //         "iso2": "NZ",
    //         "iso3": "NZL",
    //         "code": "+64",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NZL.png"
    //     },
    //     {
    //         "countryId": 143,
    //         "name": "Nicaragua",
    //         "iso2": "NI",
    //         "iso3": "NIC",
    //         "code": "+505",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NIC.png"
    //     },
    //     {
    //         "countryId": 144,
    //         "name": "Niger",
    //         "iso2": "NE",
    //         "iso3": "NER",
    //         "code": "+227",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NER.png"
    //     },
    //     {
    //         "countryId": 145,
    //         "name": "Nigeria",
    //         "iso2": "NG",
    //         "iso3": "NGA",
    //         "code": "+234",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NGA.png"
    //     },
    //     {
    //         "countryId": 146,
    //         "name": "Niue",
    //         "iso2": "NU",
    //         "iso3": "NIU",
    //         "code": "+683",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NIU.png"
    //     },
    //     {
    //         "countryId": 147,
    //         "name": "Norfolk Island",
    //         "iso2": "NF",
    //         "iso3": "NFK",
    //         "code": "+672",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NFK.png"
    //     },
    //     {
    //         "countryId": 148,
    //         "name": "North Korea",
    //         "iso2": "KP",
    //         "iso3": "PRK",
    //         "code": "+850",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PRK.png"
    //     },
    //     {
    //         "countryId": 149,
    //         "name": "Northern Mariana Islands",
    //         "iso2": "MP",
    //         "iso3": "MNP",
    //         "code": "+1 670",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MNP.png"
    //     },
    //     {
    //         "countryId": 150,
    //         "name": "Norway",
    //         "iso2": "NO",
    //         "iso3": "NOR",
    //         "code": "+47",
    //         "flag": "https://www.countryareacode.net/pictures/flag/NOR.png"
    //     },
    //     {
    //         "countryId": 151,
    //         "name": "Oman",
    //         "iso2": "OM",
    //         "iso3": "OMN",
    //         "code": "+968",
    //         "flag": "https://www.countryareacode.net/pictures/flag/OMN.png"
    //     },
    //     {
    //         "countryId": 152,
    //         "name": "Pakistan",
    //         "iso2": "PK",
    //         "iso3": "PAK",
    //         "code": "+92",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PAK.png"
    //     },
    //     {
    //         "countryId": 153,
    //         "name": "Palau",
    //         "iso2": "PW",
    //         "iso3": "PLW",
    //         "code": "+680",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PLW.png"
    //     },
    //     {
    //         "countryId": 154,
    //         "name": "Panama",
    //         "iso2": "PA",
    //         "iso3": "PAN",
    //         "code": "+507",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PAN.png"
    //     },
    //     {
    //         "countryId": 155,
    //         "name": "Papua New Guinea",
    //         "iso2": "PG",
    //         "iso3": "PNG",
    //         "code": "+675",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PNG.png"
    //     },
    //     {
    //         "countryId": 156,
    //         "name": "Paraguay",
    //         "iso2": "PY",
    //         "iso3": "PRY",
    //         "code": "+595",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PRY.png"
    //     },
    //     {
    //         "countryId": 157,
    //         "name": "Peru",
    //         "iso2": "PE",
    //         "iso3": "PER",
    //         "code": "+51",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PER.png"
    //     },
    //     {
    //         "countryId": 158,
    //         "name": "Philippines",
    //         "iso2": "PH",
    //         "iso3": "PHL",
    //         "code": "+63",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PHL.png"
    //     },
    //     {
    //         "countryId": 159,
    //         "name": "Pitcairn Islands",
    //         "iso2": "PN",
    //         "iso3": "PCN",
    //         "code": "+870",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PCN.png"
    //     },
    //     {
    //         "countryId": 160,
    //         "name": "Poland",
    //         "iso2": "PL",
    //         "iso3": "POL",
    //         "code": "+48",
    //         "flag": "https://www.countryareacode.net/pictures/flag/POL.png"
    //     },
    //     {
    //         "countryId": 161,
    //         "name": "Portugal",
    //         "iso2": "PT",
    //         "iso3": "PRT",
    //         "code": "+351",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PRT.png"
    //     },
    //     {
    //         "countryId": 162,
    //         "name": "Puerto Rico",
    //         "iso2": "PR",
    //         "iso3": "PRI",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/PRI.png"
    //     },
    //     {
    //         "countryId": 163,
    //         "name": "Qatar",
    //         "iso2": "QA",
    //         "iso3": "QAT",
    //         "code": "+974",
    //         "flag": "https://www.countryareacode.net/pictures/flag/QAT.png"
    //     },
    //     {
    //         "countryId": 164,
    //         "name": "Republic of the Congo",
    //         "iso2": "CG",
    //         "iso3": "COG",
    //         "code": "+242",
    //         "flag": "https://www.countryareacode.net/pictures/flag/COG.png"
    //     },
    //     {
    //         "countryId": 165,
    //         "name": "Reunion",
    //         "iso2": "RE",
    //         "iso3": "REU",
    //         "code": "+262",
    //         "flag": "https://www.countryareacode.net/pictures/flag/REU.png"
    //     },
    //     {
    //         "countryId": 166,
    //         "name": "Romania",
    //         "iso2": "RO",
    //         "iso3": "ROU",
    //         "code": "+40",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ROU.png"
    //     },
    //     {
    //         "countryId": 167,
    //         "name": "Russia",
    //         "iso2": "RU",
    //         "iso3": "RUS",
    //         "code": "+7",
    //         "flag": "https://www.countryareacode.net/pictures/flag/RUS.png"
    //     },
    //     {
    //         "countryId": 168,
    //         "name": "Rwanda",
    //         "iso2": "RW",
    //         "iso3": "RWA",
    //         "code": "+250",
    //         "flag": "https://www.countryareacode.net/pictures/flag/RWA.png"
    //     },
    //     {
    //         "countryId": 169,
    //         "name": "Saint Barthélemy",
    //         "iso2": "BL",
    //         "iso3": "BLM",
    //         "code": "+590",
    //         "flag": "https://www.countryareacode.net/pictures/flag/BLM.png"
    //     },
    //     {
    //         "countryId": 170,
    //         "name": "Saint Helena",
    //         "iso2": "SH",
    //         "iso3": "SHN",
    //         "code": "+290",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SHN.png"
    //     },
    //     {
    //         "countryId": 171,
    //         "name": "Saint Kitts and Nevis",
    //         "iso2": "KN",
    //         "iso3": "KNA",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KNA.png"
    //     },
    //     {
    //         "countryId": 172,
    //         "name": "Saint Lucia",
    //         "iso2": "LC",
    //         "iso3": "LCA",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LCA.png"
    //     },
    //     {
    //         "countryId": 173,
    //         "name": "Saint Martin",
    //         "iso2": "MF",
    //         "iso3": "MAF",
    //         "code": "+1 599",
    //         "flag": "https://www.countryareacode.net/pictures/flag/MAF.png"
    //     },
    //     {
    //         "countryId": 174,
    //         "name": "Saint Pierre and Miquelon",
    //         "iso2": "PM",
    //         "iso3": "SPM",
    //         "code": "+508",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SPM.png"
    //     },
    //     {
    //         "countryId": 175,
    //         "name": "Saint Vincent and the Grenadines",
    //         "iso2": "VC",
    //         "iso3": "VCT",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/VCT.png"
    //     },
    //     {
    //         "countryId": 176,
    //         "name": "Samoa",
    //         "iso2": "WS",
    //         "iso3": "WSM",
    //         "code": "+685",
    //         "flag": "https://www.countryareacode.net/pictures/flag/WSM.png"
    //     },
    //     {
    //         "countryId": 177,
    //         "name": "San Marino",
    //         "iso2": "SM",
    //         "iso3": "SMR",
    //         "code": "+378",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SMR.png"
    //     },
    //     {
    //         "countryId": 178,
    //         "name": "Sao Tome and Principe",
    //         "iso2": "ST",
    //         "iso3": "STP",
    //         "code": "+239",
    //         "flag": "https://www.countryareacode.net/pictures/flag/STP.png"
    //     },
    //     {
    //         "countryId": 179,
    //         "name": "Saudi Arabia",
    //         "iso2": "SA",
    //         "iso3": "SAU",
    //         "code": "+966",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SAU.png"
    //     },
    //     {
    //         "countryId": 180,
    //         "name": "Senegal",
    //         "iso2": "SN",
    //         "iso3": "SEN",
    //         "code": "+221",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SEN.png"
    //     },
    //     {
    //         "countryId": 181,
    //         "name": "Serbia",
    //         "iso2": "RS",
    //         "iso3": "SRB",
    //         "code": "+381",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SRB.png"
    //     },
    //     {
    //         "countryId": 182,
    //         "name": "Seychelles",
    //         "iso2": "SC",
    //         "iso3": "SYC",
    //         "code": "+248",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SYC.png"
    //     },
    //     {
    //         "countryId": 183,
    //         "name": "Sierra Leone",
    //         "iso2": "SL",
    //         "iso3": "SLE",
    //         "code": "+232",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SLE.png"
    //     },
    //     {
    //         "countryId": 184,
    //         "name": "Singapore",
    //         "iso2": "SG",
    //         "iso3": "SGP",
    //         "code": "+65",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SGP.png"
    //     },
    //     {
    //         "countryId": 185,
    //         "name": "Slovakia",
    //         "iso2": "SK",
    //         "iso3": "SVK",
    //         "code": "+421",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SVK.png"
    //     },
    //     {
    //         "countryId": 186,
    //         "name": "Slovenia",
    //         "iso2": "SI",
    //         "iso3": "SVN",
    //         "code": "+386",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SVN.png"
    //     },
    //     {
    //         "countryId": 187,
    //         "name": "Solomon Islands",
    //         "iso2": "SB",
    //         "iso3": "SLB",
    //         "code": "+677",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SLB.png"
    //     },
    //     {
    //         "countryId": 188,
    //         "name": "Somalia",
    //         "iso2": "SO",
    //         "iso3": "SOM",
    //         "code": "+252",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SOM.png"
    //     },
    //     {
    //         "countryId": 189,
    //         "name": "South Africa",
    //         "iso2": "ZA",
    //         "iso3": "ZAF",
    //         "code": "+27",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ZAF.png"
    //     },
    //     {
    //         "countryId": 190,
    //         "name": "South Korea",
    //         "iso2": "KR",
    //         "iso3": "KOR",
    //         "code": "+82",
    //         "flag": "https://www.countryareacode.net/pictures/flag/KOR.png"
    //     },
    //     {
    //         "countryId": 191,
    //         "name": "South Sudan",
    //         "iso2": "SS",
    //         "iso3": "SSD",
    //         "code": "+211",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SSD.png"
    //     },
    //     {
    //         "countryId": 192,
    //         "name": "Spain",
    //         "iso2": "ES",
    //         "iso3": "ESP",
    //         "code": "+34",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ESP.png"
    //     },
    //     {
    //         "countryId": 193,
    //         "name": "Sri Lanka",
    //         "iso2": "LK",
    //         "iso3": "LKA",
    //         "code": "+94",
    //         "flag": "https://www.countryareacode.net/pictures/flag/LKA.png"
    //     },
    //     {
    //         "countryId": 194,
    //         "name": "Sudan",
    //         "iso2": "SD",
    //         "iso3": "SDN",
    //         "code": "+249",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SDN.png"
    //     },
    //     {
    //         "countryId": 195,
    //         "name": "Suriname",
    //         "iso2": "SR",
    //         "iso3": "SUR",
    //         "code": "+597",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SUR.png"
    //     },
    //     {
    //         "countryId": 196,
    //         "name": "Swaziland",
    //         "iso2": "SZ",
    //         "iso3": "SWZ",
    //         "code": "+268",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SWZ.png"
    //     },
    //     {
    //         "countryId": 197,
    //         "name": "Sweden",
    //         "iso2": "SE",
    //         "iso3": "SWE",
    //         "code": "+46",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SWE.png"
    //     },
    //     {
    //         "countryId": 198,
    //         "name": "Switzerland",
    //         "iso2": "CH",
    //         "iso3": "CHE",
    //         "code": "+41",
    //         "flag": "https://www.countryareacode.net/pictures/flag/CHE.png"
    //     },
    //     {
    //         "countryId": 199,
    //         "name": "Syria",
    //         "iso2": "SY",
    //         "iso3": "SYR",
    //         "code": "+963",
    //         "flag": "https://www.countryareacode.net/pictures/flag/SYR.png"
    //     },
    //     {
    //         "countryId": 200,
    //         "name": "Taiwan",
    //         "iso2": "TW",
    //         "iso3": "TWN",
    //         "code": "+886",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TWN.png"
    //     },
    //     {
    //         "countryId": 201,
    //         "name": "Tajikistan",
    //         "iso2": "TJ",
    //         "iso3": "TJK",
    //         "code": "+992",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TJK.png"
    //     },
    //     {
    //         "countryId": 202,
    //         "name": "Tanzania",
    //         "iso2": "TZ",
    //         "iso3": "TZA",
    //         "code": "+255",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TZA.png"
    //     },
    //     {
    //         "countryId": 203,
    //         "name": "Thailand",
    //         "iso2": "TH",
    //         "iso3": "THA",
    //         "code": "+66",
    //         "flag": "https://www.countryareacode.net/pictures/flag/THA.png"
    //     },
    //     {
    //         "countryId": 204,
    //         "name": "Togo",
    //         "iso2": "TG",
    //         "iso3": "TGO",
    //         "code": "+228",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TGO.png"
    //     },
    //     {
    //         "countryId": 205,
    //         "name": "Tokelau",
    //         "iso2": "TK",
    //         "iso3": "TKL",
    //         "code": "+690",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TKL.png"
    //     },
    //     {
    //         "countryId": 206,
    //         "name": "Trinidad and Tobago",
    //         "iso2": "TT",
    //         "iso3": "TTO",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TTO.png"
    //     },
    //     {
    //         "countryId": 207,
    //         "name": "Tunisia",
    //         "iso2": "TN",
    //         "iso3": "TUN",
    //         "code": "+216",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TUN.png"
    //     },
    //     {
    //         "countryId": 208,
    //         "name": "Turkey",
    //         "iso2": "TR",
    //         "iso3": "TUR",
    //         "code": "+90",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TUR.png"
    //     },
    //     {
    //         "countryId": 209,
    //         "name": "Turkmenistan",
    //         "iso2": "TM",
    //         "iso3": "TKM",
    //         "code": "+993",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TKM.png"
    //     },
    //     {
    //         "countryId": 210,
    //         "name": "Tuvalu",
    //         "iso2": "TV",
    //         "iso3": "TUV",
    //         "code": "+688",
    //         "flag": "https://www.countryareacode.net/pictures/flag/TUV.png"
    //     },
    //     {
    //         "countryId": 211,
    //         "name": "Uganda",
    //         "iso2": "UG",
    //         "iso3": "UGA",
    //         "code": "+256",
    //         "flag": "https://www.countryareacode.net/pictures/flag/UGA.png"
    //     },
    //     {
    //         "countryId": 212,
    //         "name": "Ukraine",
    //         "iso2": "UA",
    //         "iso3": "UKR",
    //         "code": "+380",
    //         "flag": "https://www.countryareacode.net/pictures/flag/UKR.png"
    //     },
    //     {
    //         "countryId": 213,
    //         "name": "United Arab Emirates",
    //         "iso2": "AE",
    //         "iso3": "ARE",
    //         "code": "+971",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ARE.png"
    //     },
    //     {
    //         "countryId": 214,
    //         "name": "United Kingdom",
    //         "iso2": "GB",
    //         "iso3": "GBR",
    //         "code": "+44",
    //         "flag": "https://www.countryareacode.net/pictures/flag/GBR.png"
    //     },
    //     {
    //         "countryId": 215,
    //         "name": "United States",
    //         "iso2": "US",
    //         "iso3": "USA",
    //         "code": "+1",
    //         "flag": "https://www.countryareacode.net/pictures/flag/USA.png"
    //     },
    //     {
    //         "countryId": 216,
    //         "name": "Uruguay",
    //         "iso2": "UY",
    //         "iso3": "URY",
    //         "code": "+598",
    //         "flag": "https://www.countryareacode.net/pictures/flag/URY.png"
    //     },
    //     {
    //         "countryId": 217,
    //         "name": "Uzbekistan",
    //         "iso2": "UZ",
    //         "iso3": "UZB",
    //         "code": "+998",
    //         "flag": "https://www.countryareacode.net/pictures/flag/UZB.png"
    //     },
    //     {
    //         "countryId": 218,
    //         "name": "Vanuatu",
    //         "iso2": "VU",
    //         "iso3": "VUT",
    //         "code": "+678",
    //         "flag": "https://www.countryareacode.net/pictures/flag/VUT.png"
    //     },
    //     {
    //         "countryId": 219,
    //         "name": "Vatican",
    //         "iso2": "VA",
    //         "iso3": "VAT",
    //         "code": "+39",
    //         "flag": "https://www.countryareacode.net/pictures/flag/VAT.png"
    //     },
    //     {
    //         "countryId": 220,
    //         "name": "Venezuela",
    //         "iso2": "VE",
    //         "iso3": "VEN",
    //         "code": "+58",
    //         "flag": "https://www.countryareacode.net/pictures/flag/VEN.png"
    //     },
    //     {
    //         "countryId": 221,
    //         "name": "Vietnam",
    //         "iso2": "VN",
    //         "iso3": "VNM",
    //         "code": "+84",
    //         "flag": "https://www.countryareacode.net/pictures/flag/VNM.png"
    //     },
    //     {
    //         "countryId": 222,
    //         "name": "Western Sahara",
    //         "iso2": "EH",
    //         "iso3": "ESH",
    //         "code": "+212",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ESH.png"
    //     },
    //     {
    //         "countryId": 223,
    //         "name": "Yemen",
    //         "iso2": "YE",
    //         "iso3": "YEM",
    //         "code": "+967",
    //         "flag": "https://www.countryareacode.net/pictures/flag/YEM.png"
    //     },
    //     {
    //         "countryId": 224,
    //         "name": "Zambia",
    //         "iso2": "ZM",
    //         "iso3": "ZMB",
    //         "code": "+260",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ZMB.png"
    //     },
    //     {
    //         "countryId": 225,
    //         "name": "Zimbabwe",
    //         "iso2": "ZW",
    //         "iso3": "ZWE",
    //         "code": "+263",
    //         "flag": "https://www.countryareacode.net/pictures/flag/ZWE.png"
    //     }
    // ]
}
