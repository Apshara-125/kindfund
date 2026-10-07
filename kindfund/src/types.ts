export interface Cause { id:string; category:string; title:string; country:string; description:string; raised:number; goal:number; donors?:number; image:string; imageAlt:string }
export interface User { name:string; email:string; totalDonated:number; causesSupported:number; monthlySupport:boolean; avatar:string }
export interface Donation { amount:number; frequency:'one-time'|'monthly'; cause?:string }
export interface LiveActivity { id:number; city:string; cause:string; minutesAgo:number }
