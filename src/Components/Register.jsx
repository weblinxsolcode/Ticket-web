import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { Link } from 'react-router-dom'
import Header from './Elements/Header'
import config from '../config'
import axios from 'axios'
import Footer from './Elements/Footer'
import { useHistory, useParams } from 'react-router-dom';



export default function Register() {
  const scroll = () => {
    window.scrollTo(0, 0);

    console.log("scroll value reset")
  }

  const history = useHistory()
  const [name, setname] = useState("")
  const [surname, setsurname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [password, setpassword] = useState("")
  const [country, setcountry] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const [terms, setterms] = useState(false)
  const [error, seterror] = useState("")
  const [loader, setloader] = useState(0)
  const dispatch = useDispatch()
  const coun = [
    {
      name: 'Afghanistan',
      code: 'AF',
      timezone: 'Afghanistan Standard Time',
      utc: 'UTC+04:30',
      mobileCode: '+93',
    },
    {
      name: 'Åland Islands',
      code: 'AX',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+358-18',
    },
    {
      name: 'Albania',
      code: 'AL',
      timezone: 'Central Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+355',
    },
    {
      name: 'Algeria',
      code: 'DZ',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+213',
    },
    {
      name: 'American Samoa',
      code: 'AS',
      timezone: 'UTC-11',
      utc: 'UTC-11:00',
      mobileCode: '+1-684',
    },
    {
      name: 'Andorra',
      code: 'AD',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+376',
    },
    {
      name: 'Angola',
      code: 'AO',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+244',
    },
    {
      name: 'Anguilla',
      code: 'AI',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-264',
    },
    {
      name: 'Antarctica',
      code: 'AQ',
      timezone: 'Pacific SA Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+',
    },
    {
      name: 'Antigua and Barbuda',
      code: 'AG',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-268',
    },
    {
      name: 'Argentina',
      code: 'AR',
      timezone: 'Argentina Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+54',
    },
    {
      name: 'Armenia',
      code: 'AM',
      timezone: 'Caucasus Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+374',
    },
    {
      name: 'Aruba',
      code: 'AW',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+297',
    },
    {
      name: 'Australia',
      code: 'AU',
      timezone: 'AUS Eastern Standard Time',
      utc: 'UTC+10:00',
      mobileCode: '+61',
    },
    {
      name: 'Austria',
      code: 'AT',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+43',
    },
    {
      name: 'Azerbaijan',
      code: 'AZ',
      timezone: 'Azerbaijan Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+994',
    },
    {
      name: 'Bahamas, The',
      code: 'BS',
      timezone: 'Eastern Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+1-242',
    },
    {
      name: 'Bahrain',
      code: 'BH',
      timezone: 'Arab Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+973',
    },
    {
      name: 'Bangladesh',
      code: 'BD',
      timezone: 'Bangladesh Standard Time',
      utc: 'UTC+06:00',
      mobileCode: '+880',
    },
    {
      name: 'Barbados',
      code: 'BB',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-246',
    },
    {
      name: 'Belarus',
      code: 'BY',
      timezone: 'Belarus Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+375',
    },
    {
      name: 'Belgium',
      code: 'BE',
      timezone: 'Romance Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+32',
    },
    {
      name: 'Belize',
      code: 'BZ',
      timezone: 'Central America Standard Time',
      utc: 'UTC-06:00',
      mobileCode: '+501',
    },
    {
      name: 'Benin',
      code: 'BJ',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+229',
    },
    {
      name: 'Bermuda',
      code: 'BM',
      timezone: 'Atlantic Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-441',
    },
    {
      name: 'Bhutan',
      code: 'BT',
      timezone: 'Bangladesh Standard Time',
      utc: 'UTC+06:00',
      mobileCode: '+975',
    },
    {
      name: 'Bolivarian Republic of Venezuela',
      code: 'VE',
      timezone: 'Venezuela Standard Time',
      utc: 'UTC-04:30',
      mobileCode: '+58',
    },
    {
      name: 'Bolivia',
      code: 'BO',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+591',
    },
    {
      name: 'Bonaire, Sint Eustatius and Saba',
      code: 'BQ',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+599',
    },
    {
      name: 'Bosnia and Herzegovina',
      code: 'BA',
      timezone: 'Central European Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+387',
    },
    {
      name: 'Botswana',
      code: 'BW',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+267',
    },
    {
      name: 'Bouvet Island',
      code: 'BV',
      timezone: 'UTC',
      utc: 'UTC',
      mobileCode: '+',
    },
    {
      name: 'Brazil',
      code: 'BR',
      timezone: 'E. South America Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+55',
    },
    {
      name: 'British Indian Ocean Territory',
      code: 'IO',
      timezone: 'Central Asia Standard Time',
      utc: 'UTC+06:00',
      mobileCode: '+246',
    },
    {
      name: 'Brunei',
      code: 'BN',
      timezone: 'Singapore Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+673',
    },
    {
      name: 'Bulgaria',
      code: 'BG',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+359',
    },
    {
      name: 'Burkina Faso',
      code: 'BF',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+226',
    },
    {
      name: 'Burundi',
      code: 'BI',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+257',
    },
    {
      name: 'Cabo Verde',
      code: 'CV',
      timezone: 'Cape Verde Standard Time',
      utc: 'UTC-01:00',
      mobileCode: '+238',
    },
    {
      name: 'Cambodia',
      code: 'KH',
      timezone: 'SE Asia Standard Time',
      utc: 'UTC+07:00',
      mobileCode: '+855',
    },
    {
      name: 'Cameroon',
      code: 'CM',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+237',
    },
    {
      name: 'Canada',
      code: 'CA',
      timezone: 'Eastern Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+1',
    },
    {
      name: 'Cayman Islands',
      code: 'KY',
      timezone: 'SA Pacific Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+1-345',
    },
    {
      name: 'Central African Republic',
      code: 'CF',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+236',
    },
    {
      name: 'Chad',
      code: 'TD',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+235',
    },
    {
      name: 'Chile',
      code: 'CL',
      timezone: 'Pacific SA Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+56',
    },
    {
      name: 'China',
      code: 'CN',
      timezone: 'China Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+86',
    },
    {
      name: 'Christmas Island',
      code: 'CX',
      timezone: 'SE Asia Standard Time',
      utc: 'UTC+07:00',
      mobileCode: '+61',
    },
    {
      name: 'Cocos (Keeling) Islands',
      code: 'CC',
      timezone: 'Myanmar Standard Time',
      utc: 'UTC+06:30',
      mobileCode: '+61',
    },
    {
      name: 'Colombia',
      code: 'CO',
      timezone: 'SA Pacific Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+57',
    },
    {
      name: 'Comoros',
      code: 'KM',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+269',
    },
    {
      name: 'Congo',
      code: 'CG',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+242',
    },
    {
      name: 'Congo (DRC)',
      code: 'CD',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+243',
    },
    {
      name: 'Cook Islands',
      code: 'CK',
      timezone: 'Hawaiian Standard Time',
      utc: 'UTC-10:00',
      mobileCode: '+682',
    },
    {
      name: 'Costa Rica',
      code: 'CR',
      timezone: 'Central America Standard Time',
      utc: 'UTC-06:00',
      mobileCode: '+506',
    },
    {
      name: "Côte d'Ivoire",
      code: 'CI',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+225',
    },
    {
      name: 'Croatia',
      code: 'HR',
      timezone: 'Central European Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+385',
    },
    {
      name: 'Cuba',
      code: 'CU',
      timezone: 'Eastern Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+53',
    },
    {
      name: 'Curaçao',
      code: 'CW',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+599',
    },
    {
      name: 'Cyprus',
      code: 'CY',
      timezone: 'E. Europe Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+357',
    },
    {
      name: 'Czech Republic',
      code: 'CZ',
      timezone: 'Central Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+420',
    },
    {
      name: 'Democratic Republic of Timor-Leste',
      code: 'TL',
      timezone: 'Tokyo Standard Time',
      utc: 'UTC+09:00',
      mobileCode: '+670',
    },
    {
      name: 'Denmark',
      code: 'DK',
      timezone: 'Romance Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+45',
    },
    {
      name: 'Djibouti',
      code: 'DJ',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+253',
    },
    {
      name: 'Dominica',
      code: 'DM',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-767',
    },
    {
      name: 'Dominican Republic',
      code: 'DO',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-809 and 1-829',
    },
    {
      name: 'Ecuador',
      code: 'EC',
      timezone: 'SA Pacific Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+593',
    },
    {
      name: 'Egypt',
      code: 'EG',
      timezone: 'Egypt Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+20',
    },
    {
      name: 'El Salvador',
      code: 'SV',
      timezone: 'Central America Standard Time',
      utc: 'UTC-06:00',
      mobileCode: '+503',
    },
    {
      name: 'Equatorial Guinea',
      code: 'GQ',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+240',
    },
    {
      name: 'Eritrea',
      code: 'ER',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+291',
    },
    {
      name: 'Estonia',
      code: 'EE',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+372',
    },
    {
      name: 'Ethiopia',
      code: 'ET',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+251',
    },
    {
      name: 'Falkland Islands (Islas Malvinas)',
      code: 'FK',
      timezone: 'SA Eastern Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+500',
    },
    {
      name: 'Faroe Islands',
      code: 'FO',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+298',
    },
    {
      name: 'Fiji Islands',
      code: 'FJ',
      timezone: 'Fiji Standard Time',
      utc: 'UTC+12:00',
      mobileCode: '+679',
    },
    {
      name: 'Finland',
      code: 'FI',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+358',
    },
    {
      name: 'France',
      code: 'FR',
      timezone: 'Romance Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+33',
    },
    {
      name: 'French Guiana',
      code: 'GF',
      timezone: 'SA Eastern Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+594',
    },
    {
      name: 'French Polynesia',
      code: 'PF',
      timezone: 'Hawaiian Standard Time',
      utc: 'UTC-10:00',
      mobileCode: '+689',
    },
    {
      name: 'French Southern and Antarctic Lands',
      code: 'TF',
      timezone: 'West Asia Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+',
    },
    {
      name: 'Gabon',
      code: 'GA',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+241',
    },
    {
      name: 'Gambia, The',
      code: 'GM',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+220',
    },
    {
      name: 'Georgia',
      code: 'GE',
      timezone: 'Georgian Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+995',
    },
    {
      name: 'Germany',
      code: 'DE',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+49',
    },
    {
      name: 'Ghana',
      code: 'GH',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+233',
    },
    {
      name: 'Gibraltar',
      code: 'GI',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+350',
    },
    {
      name: 'Greece',
      code: 'GR',
      timezone: 'GTB Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+30',
    },
    {
      name: 'Greenland',
      code: 'GL',
      timezone: 'Greenland Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+299',
    },
    {
      name: 'Grenada',
      code: 'GD',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-473',
    },
    {
      name: 'Guadeloupe',
      code: 'GP',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+590',
    },
    {
      name: 'Guam',
      code: 'GU',
      timezone: 'West Pacific Standard Time',
      utc: 'UTC+10:00',
      mobileCode: '+1-671',
    },
    {
      name: 'Guatemala',
      code: 'GT',
      timezone: 'Central America Standard Time',
      utc: 'UTC-06:00',
      mobileCode: '+502',
    },
    {
      name: 'Guernsey',
      code: 'GG',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+44-1481',
    },
    {
      name: 'Guinea',
      code: 'GN',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+224',
    },
    {
      name: 'Guinea-Bissau',
      code: 'GW',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+245',
    },
    {
      name: 'Guyana',
      code: 'GY',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+592',
    },
    {
      name: 'Haiti',
      code: 'HT',
      timezone: 'Eastern Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+509',
    },
    {
      name: 'Heard Island and McDonald Islands',
      code: 'HM',
      timezone: 'Mauritius Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+ ',
    },
    {
      name: 'Honduras',
      code: 'HN',
      timezone: 'Central America Standard Time',
      utc: 'UTC-06:00',
      mobileCode: '+504',
    },
    {
      name: 'Hong Kong SAR',
      code: 'HK',
      timezone: 'China Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+852',
    },
    {
      name: 'Hungary',
      code: 'HU',
      timezone: 'Central Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+36',
    },
    {
      name: 'Iceland',
      code: 'IS',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+354',
    },
    {
      name: 'India',
      code: 'IN',
      timezone: 'India Standard Time',
      utc: 'UTC+05:30',
      mobileCode: '+91',
    },
    {
      name: 'Indonesia',
      code: 'ID',
      timezone: 'SE Asia Standard Time',
      utc: 'UTC+07:00',
      mobileCode: '+62',
    },
    {
      name: 'Iran',
      code: 'IR',
      timezone: 'Iran Standard Time',
      utc: 'UTC+03:30',
      mobileCode: '+98',
    },
    {
      name: 'Iraq',
      code: 'IQ',
      timezone: 'Arabic Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+964',
    },
    {
      name: 'Ireland',
      code: 'IE',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+353',
    },
    {
      name: 'Israel',
      code: 'IL',
      timezone: 'Israel Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+972',
    },
    {
      name: 'Italy',
      code: 'IT',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+39',
    },
    {
      name: 'Jamaica',
      code: 'JM',
      timezone: 'SA Pacific Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+1-876',
    },
    {
      name: 'Jan Mayen',
      code: 'SJ',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+47',
    },
    {
      name: 'Japan',
      code: 'JP',
      timezone: 'Tokyo Standard Time',
      utc: 'UTC+09:00',
      mobileCode: '+81',
    },
    {
      name: 'Jersey',
      code: 'JE',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+44-1534',
    },
    {
      name: 'Jordan',
      code: 'JO',
      timezone: 'Jordan Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+962',
    },
    {
      name: 'Kazakhstan',
      code: 'KZ',
      timezone: 'Central Asia Standard Time',
      utc: 'UTC+06:00',
      mobileCode: '+7',
    },
    {
      name: 'Kenya',
      code: 'KE',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+254',
    },
    {
      name: 'Kiribati',
      code: 'KI',
      timezone: 'UTC+12',
      utc: 'UTC+12:00',
      mobileCode: '+686',
    },
    {
      name: 'Korea',
      code: 'KR',
      timezone: 'Korea Standard Time',
      utc: 'UTC+09:00',
      mobileCode: '+82',
    },
    {
      name: 'Kosovo',
      code: 'XK',
      timezone: 'Central European Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+',
    },
    {
      name: 'Kuwait',
      code: 'KW',
      timezone: 'Arab Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+965',
    },
    {
      name: 'Kyrgyzstan',
      code: 'KG',
      timezone: 'Central Asia Standard Time',
      utc: 'UTC+06:00',
      mobileCode: '+996',
    },
    {
      name: 'Laos',
      code: 'LA',
      timezone: 'SE Asia Standard Time',
      utc: 'UTC+07:00',
      mobileCode: '+856',
    },
    {
      name: 'Latvia',
      code: 'LV',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+371',
    },
    {
      name: 'Lebanon',
      code: 'LB',
      timezone: 'Middle East Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+961',
    },
    {
      name: 'Lesotho',
      code: 'LS',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+266',
    },
    {
      name: 'Liberia',
      code: 'LR',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+231',
    },
    {
      name: 'Libya',
      code: 'LY',
      timezone: 'E. Europe Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+218',
    },
    {
      name: 'Liechtenstein',
      code: 'LI',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+423',
    },
    {
      name: 'Lithuania',
      code: 'LT',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+370',
    },
    {
      name: 'Luxembourg',
      code: 'LU',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+352',
    },
    {
      name: 'Macao SAR',
      code: 'MO',
      timezone: 'China Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+853',
    },
    {
      name: 'Macedonia, Former Yugoslav Republic of',
      code: 'MK',
      timezone: 'Central European Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+389',
    },
    {
      name: 'Madagascar',
      code: 'MG',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+261',
    },
    {
      name: 'Malawi',
      code: 'MW',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+265',
    },
    {
      name: 'Malaysia',
      code: 'MY',
      timezone: 'Singapore Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+60',
    },
    {
      name: 'Maldives',
      code: 'MV',
      timezone: 'West Asia Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+960',
    },
    {
      name: 'Mali',
      code: 'ML',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+223',
    },
    {
      name: 'Malta',
      code: 'MT',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+356',
    },
    {
      name: 'Man, Isle of',
      code: 'IM',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+44-1624',
    },
    {
      name: 'Marshall Islands',
      code: 'MH',
      timezone: 'UTC+12',
      utc: 'UTC+12:00',
      mobileCode: '+692',
    },
    {
      name: 'Martinique',
      code: 'MQ',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+596',
    },
    {
      name: 'Mauritania',
      code: 'MR',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+222',
    },
    {
      name: 'Mauritius',
      code: 'MU',
      timezone: 'Mauritius Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+230',
    },
    {
      name: 'Mayotte',
      code: 'YT',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+262',
    },
    {
      name: 'Mexico',
      code: 'MX',
      timezone: 'Central Standard Time (Mexico)',
      utc: 'UTC-06:00',
      mobileCode: '+52',
    },
    {
      name: 'Micronesia',
      code: 'FM',
      timezone: 'West Pacific Standard Time',
      utc: 'UTC+10:00',
      mobileCode: '+691',
    },
    {
      name: 'Moldova',
      code: 'MD',
      timezone: 'GTB Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+373',
    },
    {
      name: 'Monaco',
      code: 'MC',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+377',
    },
    {
      name: 'Mongolia',
      code: 'MN',
      timezone: 'Ulaanbaatar Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+976',
    },
    {
      name: 'Montenegro',
      code: 'ME',
      timezone: 'Central European Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+382',
    },
    {
      name: 'Montserrat',
      code: 'MS',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-664',
    },
    {
      name: 'Morocco',
      code: 'MA',
      timezone: 'Morocco Standard Time',
      utc: 'UTC',
      mobileCode: '+212',
    },
    {
      name: 'Mozambique',
      code: 'MZ',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+258',
    },
    {
      name: 'Myanmar',
      code: 'MM',
      timezone: 'Myanmar Standard Time',
      utc: 'UTC+06:30',
      mobileCode: '+95',
    },
    {
      name: 'Namibia',
      code: 'NA',
      timezone: 'Namibia Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+264',
    },
    {
      name: 'Nauru',
      code: 'NR',
      timezone: 'UTC+12',
      utc: 'UTC+12:00',
      mobileCode: '+674',
    },
    {
      name: 'Nepal',
      code: 'NP',
      timezone: 'Nepal Standard Time',
      utc: 'UTC+05:45',
      mobileCode: '+977',
    },
    {
      name: 'Netherlands',
      code: 'NL',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+31',
    },
    {
      name: 'New Caledonia',
      code: 'NC',
      timezone: 'Central Pacific Standard Time',
      utc: 'UTC+11:00',
      mobileCode: '+687',
    },
    {
      name: 'New Zealand',
      code: 'NZ',
      timezone: 'New Zealand Standard Time',
      utc: 'UTC+12:00',
      mobileCode: '+64',
    },
    {
      name: 'Nicaragua',
      code: 'NI',
      timezone: 'Central America Standard Time',
      utc: 'UTC-06:00',
      mobileCode: '+505',
    },
    {
      name: 'Niger',
      code: 'NE',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+227',
    },
    {
      name: 'Nigeria',
      code: 'NG',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+234',
    },
    {
      name: 'Niue',
      code: 'NU',
      timezone: 'UTC-11',
      utc: 'UTC-11:00',
      mobileCode: '+683',
    },
    {
      name: 'Norfolk Island',
      code: 'NF',
      timezone: 'Central Pacific Standard Time',
      utc: 'UTC+11:00',
      mobileCode: '+672',
    },
    {
      name: 'North Korea',
      code: 'KP',
      timezone: 'Korea Standard Time',
      utc: 'UTC+09:00',
      mobileCode: '+850',
    },
    {
      name: 'Northern Mariana Islands',
      code: 'MP',
      timezone: 'West Pacific Standard Time',
      utc: 'UTC+10:00',
      mobileCode: '+1-670',
    },
    {
      name: 'Norway',
      code: 'NO',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+47',
    },
    {
      name: 'Oman',
      code: 'OM',
      timezone: 'Arabian Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+968',
    },
    {
      name: 'Pakistan',
      code: 'PK',
      timezone: 'Pakistan Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+92',
    },
    {
      name: 'Palau',
      code: 'PW',
      timezone: 'Tokyo Standard Time',
      utc: 'UTC+09:00',
      mobileCode: '+680',
    },
    {
      name: 'Palestinian Authority',
      code: 'PS',
      timezone: 'Egypt Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+970',
    },
    {
      name: 'Panama',
      code: 'PA',
      timezone: 'SA Pacific Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+507',
    },
    {
      name: 'Papua New Guinea',
      code: 'PG',
      timezone: 'West Pacific Standard Time',
      utc: 'UTC+10:00',
      mobileCode: '+675',
    },
    {
      name: 'Paraguay',
      code: 'PY',
      timezone: 'Paraguay Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+595',
    },
    {
      name: 'Peru',
      code: 'PE',
      timezone: 'SA Pacific Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+51',
    },
    {
      name: 'Philippines',
      code: 'PH',
      timezone: 'Singapore Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+63',
    },
    {
      name: 'Pitcairn Islands',
      code: 'PN',
      timezone: 'Pacific Standard Time',
      utc: 'UTC-08:00',
      mobileCode: '+870',
    },
    {
      name: 'Poland',
      code: 'PL',
      timezone: 'Central European Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+48',
    },
    {
      name: 'Portugal',
      code: 'PT',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+351',
    },
    {
      name: 'Puerto Rico',
      code: 'PR',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-787 and 1-939',
    },
    {
      name: 'Qatar',
      code: 'QA',
      timezone: 'Arab Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+974',
    },
    {
      name: 'Reunion',
      code: 'RE',
      timezone: 'Mauritius Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+262',
    },
    {
      name: 'Romania',
      code: 'RO',
      timezone: 'GTB Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+40',
    },
    {
      name: 'Russia',
      code: 'RU',
      timezone: 'Russian Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+7',
    },
    {
      name: 'Rwanda',
      code: 'RW',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+250',
    },
    {
      name: 'Saint Barthélemy',
      code: 'BL',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+590',
    },
    {
      name: 'Saint Helena, Ascension and Tristan da Cunha',
      code: 'SH',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+290',
    },
    {
      name: 'Saint Kitts and Nevis',
      code: 'KN',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-869',
    },
    {
      name: 'Saint Lucia',
      code: 'LC',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-758',
    },
    {
      name: 'Saint Martin (French part)',
      code: 'MF',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+590',
    },
    {
      name: 'Saint Pierre and Miquelon',
      code: 'PM',
      timezone: 'Greenland Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+508',
    },
    {
      name: 'Saint Vincent and the Grenadines',
      code: 'VC',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-784',
    },
    {
      name: 'Samoa',
      code: 'WS',
      timezone: 'Samoa Standard Time',
      utc: 'UTC+13:00',
      mobileCode: '+685',
    },
    {
      name: 'San Marino',
      code: 'SM',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+378',
    },
    {
      name: 'São Tomé and Príncipe',
      code: 'ST',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+239',
    },
    {
      name: 'Saudi Arabia',
      code: 'SA',
      timezone: 'Arab Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+966',
    },
    {
      name: 'Senegal',
      code: 'SN',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+221',
    },
    {
      name: 'Serbia',
      code: 'RS',
      timezone: 'Central Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+381',
    },
    {
      name: 'Seychelles',
      code: 'SC',
      timezone: 'Mauritius Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+248',
    },
    {
      name: 'Sierra Leone',
      code: 'SL',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+232',
    },
    {
      name: 'Singapore',
      code: 'SG',
      timezone: 'Singapore Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+65',
    },
    {
      name: 'Sint Maarten (Dutch part)',
      code: 'SX',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+599',
    },
    {
      name: 'Slovakia',
      code: 'SK',
      timezone: 'Central Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+421',
    },
    {
      name: 'Slovenia',
      code: 'SI',
      timezone: 'Central Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+386',
    },
    {
      name: 'Solomon Islands',
      code: 'SB',
      timezone: 'Central Pacific Standard Time',
      utc: 'UTC+11:00',
      mobileCode: '+677',
    },
    {
      name: 'Somalia',
      code: 'SO',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+252',
    },
    {
      name: 'South Africa',
      code: 'ZA',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+27',
    },
    {
      name: 'South Georgia and the South Sandwich Islands',
      code: 'GS',
      timezone: 'UTC-02',
      utc: 'UTC-02:00',
      mobileCode: '+',
    },
    {
      name: 'South Sudan',
      code: 'SS',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+211',
    },
    {
      name: 'Spain',
      code: 'ES',
      timezone: 'Romance Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+34',
    },
    {
      name: 'Sri Lanka',
      code: 'LK',
      timezone: 'Sri Lanka Standard Time',
      utc: 'UTC+05:30',
      mobileCode: '+94',
    },
    {
      name: 'Sudan',
      code: 'SD',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+249',
    },
    {
      name: 'Suriname',
      code: 'SR',
      timezone: 'SA Eastern Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+597',
    },
    {
      name: 'Svalbard',
      code: 'SJ',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+47',
    },
    {
      name: 'Swaziland',
      code: 'SZ',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+268',
    },
    {
      name: 'Sweden',
      code: 'SE',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+46',
    },
    {
      name: 'Switzerland',
      code: 'CH',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+41',
    },
    {
      name: 'Syria',
      code: 'SY',
      timezone: 'Syria Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+963',
    },
    {
      name: 'Taiwan',
      code: 'TW',
      timezone: 'Taipei Standard Time',
      utc: 'UTC+08:00',
      mobileCode: '+886',
    },
    {
      name: 'Tajikistan',
      code: 'TJ',
      timezone: 'West Asia Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+992',
    },
    {
      name: 'Tanzania',
      code: 'TZ',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+255',
    },
    {
      name: 'Thailand',
      code: 'TH',
      timezone: 'SE Asia Standard Time',
      utc: 'UTC+07:00',
      mobileCode: '+66',
    },
    {
      name: 'Togo',
      code: 'TG',
      timezone: 'Greenwich Standard Time',
      utc: 'UTC',
      mobileCode: '+228',
    },
    {
      name: 'Tokelau',
      code: 'TK',
      timezone: 'Tonga Standard Time',
      utc: 'UTC+13:00',
      mobileCode: '+690',
    },
    {
      name: 'Tonga',
      code: 'TO',
      timezone: 'Tonga Standard Time',
      utc: 'UTC+13:00',
      mobileCode: '+676',
    },
    {
      name: 'Trinidad and Tobago',
      code: 'TT',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-868',
    },
    {
      name: 'Tunisia',
      code: 'TN',
      timezone: 'W. Central Africa Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+216',
    },
    {
      name: 'Turkey',
      code: 'TR',
      timezone: 'Turkey Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+90',
    },
    {
      name: 'Turkmenistan',
      code: 'TM',
      timezone: 'West Asia Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+993',
    },
    {
      name: 'Turks and Caicos Islands',
      code: 'TC',
      timezone: 'Eastern Standard Time',
      utc: 'UTC-05:00',
      mobileCode: '+1-649',
    },
    {
      name: 'Tuvalu',
      code: 'TV',
      timezone: 'UTC+12',
      utc: 'UTC+12:00',
      mobileCode: '+688',
    },
    {
      name: 'U.S. Minor Outlying Islands',
      code: 'UM',
      timezone: 'UTC-11',
      utc: 'UTC-11:00',
      mobileCode: '+1',
    },
    {
      name: 'Uganda',
      code: 'UG',
      timezone: 'E. Africa Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+256',
    },
    {
      name: 'Ukraine',
      code: 'UA',
      timezone: 'FLE Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+380',
    },
    {
      name: 'United Arab Emirates',
      code: 'AE',
      timezone: 'Arabian Standard Time',
      utc: 'UTC+04:00',
      mobileCode: '+971',
    },
    {
      name: 'United Kingdom',
      code: 'GB',
      timezone: 'GMT Standard Time',
      utc: 'UTC',
      mobileCode: '+44',
    },
    {
      name: 'United States',
      code: 'US',
      timezone: 'Pacific Standard Time',
      utc: 'UTC-08:00',
      mobileCode: '+1',
    },
    {
      name: 'Uruguay',
      code: 'UY',
      timezone: 'Montevideo Standard Time',
      utc: 'UTC-03:00',
      mobileCode: '+598',
    },
    {
      name: 'Uzbekistan',
      code: 'UZ',
      timezone: 'West Asia Standard Time',
      utc: 'UTC+05:00',
      mobileCode: '+998',
    },
    {
      name: 'Vanuatu',
      code: 'VU',
      timezone: 'Central Pacific Standard Time',
      utc: 'UTC+11:00',
      mobileCode: '+678',
    },
    {
      name: 'Vatican City',
      code: 'VA',
      timezone: 'W. Europe Standard Time',
      utc: 'UTC+01:00',
      mobileCode: '+379',
    },
    {
      name: 'Vietnam',
      code: 'VN',
      timezone: 'SE Asia Standard Time',
      utc: 'UTC+07:00',
      mobileCode: '+84',
    },
    {
      name: 'Virgin Islands, U.S.',
      code: 'VI',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-340',
    },
    {
      name: 'Virgin Islands, British',
      code: 'VG',
      timezone: 'SA Western Standard Time',
      utc: 'UTC-04:00',
      mobileCode: '+1-284',
    },
    {
      name: 'Wallis and Futuna',
      code: 'WF',
      timezone: 'UTC+12',
      utc: 'UTC+12:00',
      mobileCode: '+681',
    },
    {
      name: 'Yemen',
      code: 'YE',
      timezone: 'Arab Standard Time',
      utc: 'UTC+03:00',
      mobileCode: '+967',
    },
    {
      name: 'Zambia',
      code: 'ZM',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+260',
    },
    {
      name: 'Zimbabwe',
      code: 'ZW',
      timezone: 'South Africa Standard Time',
      utc: 'UTC+02:00',
      mobileCode: '+263',
    },
  ];

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const formSubmit = async () => {
    if (surname.split("").length < 3) {
      seterror({ variant: "danger", data: "Surname Should contain atleast 3 chracter" })
    } else {
      if (country.length < 1) {
        seterror({ variant: "danger", data: "select your country" })
      } else {
        if (name.split("").length < 3) {
          seterror({ variant: "danger", data: "Name Should contain atleast 3 chracter" })
        } else {
          if (!isValidEmail(email)) {
            seterror({ variant: "danger", data: "Invalid Email" })
          } else {
            if (phone.split("").length < 9) {
              seterror({ variant: "danger", data: "Invalid Phone number" })
            } else {
              if (password.split("").length < 6) {
                seterror({ variant: "danger", data: "Password should contain 6 letters" })
              } else {
                if (confirmPassword != password) {
                  seterror({ variant: "danger", data: "Password Not Match" })
                }
                else {
                  if (terms != true) {
                    seterror({ variant: "danger", data: "Agree terms and conditions" })
                  } else {
                    setloader(1)
                    await axios.post(`${config.baseURL}/register_user.php`, {
                      name,
                      email,
                      phone,
                      password,
                      pageURL,
                      country,
                      surname
                    }).then((result) => {
                      let getData = result.data
                      console.log(getData);

                      if (getData.status == 'false') {
                        seterror({ variant: "danger", data: getData.data })
                      }
                      if (getData.status == 'true') {
                        seterror({ variant: "success", data: getData.data.message })
                        dispatch(login({
                          email,
                          token: getData.data.token,
                          loginStatus: 1
                        }))
                        setname(" ");
                        setsurname(" ");
                        setemail(" ");
                        setphone(" ");
                        setpassword(" ");
                        setcountry(" ");
                        setconfirmPassword(" ");
                        history.push('/verify')
                      }
                    })
                    setloader(0)
                  }
                }
              }
            }
          }
        }
      }
    }




  }
  const [pageURL, setPageURL] = useState(0);

  useEffect(() => {
    setPageURL(window.location.search.split('=')[1]);
    scroll();

  }, [])
  // const {refer} = useParams();
  // const [userrefer, setuserrefer] = useState(refer);
  console.log(pageURL)
  return (
    <div>
      {/* <div id="loader-wrapper">
        <div id="loading-center-absolute">
          <div className="object" id="object_four" />
          <div className="object" id="object_three" />
          <div className="object" id="object_two" />
          <div className="object" id="object_one" />
        </div>
        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div> */}
      {/* END LOADER */}
      {/* START HEADER */}
      {/* END HEADER */}
      {/* START SECTION BANNER */}
      <section className="section_breadcrumb bg_navy_blue" data-z-index={1} data-parallax="scroll" data-image-src="assets/images/home_banner_bg.png">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="banner_text text-center">
                <h1 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.1s" style={{ animationDelay: '1.1s', opacity: 1 }}>Register</h1>
                <ul className="breadcrumb bg-transparent justify-content-center animation m-0 p-0 animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.3s" style={{ animationDelay: '1.3s', opacity: 1 }}>
                  <li><a href="/">Home</a></li>
                  <li><span>Sign Up</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}
      {/* START SECTION SIGN UP */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="authorize_box">
                <div className="title_default_dark title_border text-center">
                  <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>Register Now</h4>

                  <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Create your Free account</p>
                </div>
                <div className="field_form authorize_form">
                  {error != "" &&
                    <div className={"alert alert-" + error.variant} role="alert">
                      {error.data}
                    </div>
                  }
                  <div >
                    <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.5s" style={{ animationDelay: '0.5s', opacity: 1 }}>
                      <input onChange={(e) => setname(e.target.value)} type="text" className="form-control" required placeholder="Name" name="username" />
                    </div>
                    <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.5s" style={{ animationDelay: '0.5s', opacity: 1 }}>
                      <input onChange={(e) => setsurname(e.target.value)} type="text" className="form-control" required placeholder="Surname" name="username" />
                    </div>
                    <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: '0.6s', opacity: 1 }}>
                      <input onChange={(e) => setemail(e.target.value)} type="email" className="form-control" required placeholder="Email" name="email" />
                    </div>
                    <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.7s" style={{ animationDelay: '0.7s', opacity: 1 }}>
                      <input onChange={(e) => setphone(e.target.value)} type="number" className="form-control" required placeholder="Phone Number" name="phone_no" />
                    </div>
                    <div className="form-group col-md-12 animation animated fadeInUp" bis_skin_checked={1}>
                      {/* <label className="form-label text-faded">Select Plan</label> */}
                      <select onChange={(e) => setcountry(e.target.value)} placeholder="hello" selectedValue="hello" className=" animation animated fadeInUp form-control py-2 select2 select2-hidden-accessible" data-select2-id={1} tabIndex={-1} aria-hidden="true" style={{ animationDelay: '0.7s', opacity: 1 }}>
                        <option disabled selected >Select Your Country</option>
                        {
                          coun.map((element, index) => {
                            // console.warn(element.name)
                            return (
                              <option  value={element.name} >{element.name}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.7s" style={{ animationDelay: '0.7s', opacity: 1 }}>
                      <input onChange={(e) => setpassword(e.target.value)} type="password" className="form-control" required placeholder="Password" name="password_1" />
                    </div>
                    <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: 1 }}>
                      <input onChange={(e) => setconfirmPassword(e.target.value)} type="password" className="form-control" required placeholder="Confirm Password" name="password_2" />
                    </div>
                    <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.9s" style={{ animationDelay: '0.9s', opacity: 1 }}>
                      <div className="checkbox_field d-inline">
                        <input checked={terms} onChange={(e) => setterms(!terms)} type="checkbox" name="rememberme" id="rememberme" />
                        <label htmlFor="rememberme">I agree with <Link to="/term-of-service">Terms of Services</Link></label>
                      </div>
                    </div>
                    <div className="form-group col-md-12 text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1s" style={{ animationDelay: '1s', opacity: 1 }}>
                      <button className="btn btn-default btn-radius" type="submit" name="login_user" onClick={() => formSubmit()}>
                        Submit
                        {
                          loader == 1 &&
                          <div className="spinner-border spinner-border-sm ms-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider small_divider" />
              <div className="text-center">
                <span className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1s" style={{ animationDelay: '1s', opacity: 1 }}>Already have an account? <Link to="/login"> Login</Link></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION SIGN UP */}
      {/* START FOOTER SECTION */}

      {/* END FOOTER SECTION */}
      <a href="#" className="scrollup btn-default" style={{ display: 'none' }}><i className="ion-ios-arrow-up" /></a>
      <Footer />
    </div>
  )
}
