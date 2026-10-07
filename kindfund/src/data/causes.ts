import type { Cause } from '../types'
import { images } from './images'
export const causes: Cause[] = [
 {id:'edu',category:'Education',title:'Education for Every Child',country:'Kenya',description:'Help provide school supplies, learning resources and educational support for children in underserved communities.',raised:18420,goal:25000,donors:428,image:images.education,imageAlt:'Children learning together in a classroom'},
 {id:'water',category:'Clean Water',title:'Clean Water for Communities',country:'India',description:'Support sustainable access to safe drinking water for rural communities.',raised:32800,goal:40000,image:images.water,imageAlt:'Person collecting clean water from a community tap'},
 {id:'health',category:'Healthcare',title:'Community Healthcare Access',country:'Nepal',description:'Help local healthcare teams provide essential medical support to families who need it most.',raised:14250,goal:20000,image:images.health,imageAlt:'Healthcare worker supporting a patient'},
 {id:'food',category:'Nutrition',title:'Every Child Deserves a Healthy Start',country:'Philippines',description:'Support nutritious meals and essential food programs for children.',raised:21900,goal:30000,image:images.nutrition,imageAlt:'Children sharing a nutritious meal'},
]
