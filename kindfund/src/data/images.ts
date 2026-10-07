// All photos are Unsplash URLs in one place, so you can swap them easily.
const u=(id:string,w=1200)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`
export const images={
  hero:u('photo-1488521787991-ed7bbaae773c',1400),
  education:u('photo-1503676260728-1c00da094a0b'),
  water:u('photo-1541544181051-e46607bc22a4'),
  health:u('photo-1584515933487-779824d29309'),
  nutrition:u('photo-1593113598332-cd288d649433'),
  story:u('photo-1509099836639-18ba1795216d',1400),
  avatar:u('photo-1535713875002-d1d0cf377fde',160),
}
