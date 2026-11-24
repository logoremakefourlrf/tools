(function(){
  'use strict';const { $, escapeHTML }=window.LRTools;
  const items=[
    {name:'YouTube · Rick Astley',category:'media',emoji:'▶',tone:'#fff0f0',description:'The classic music-video corner of YouTube.',url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',embed:'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'},
    {name:'Facebook · How it’s me',category:'social',emoji:'f',tone:'#edf3ff',description:'Visit Facebook. Sign-in may be required.',url:'https://www.facebook.com/'},
    {name:'Google Forms · Comment',category:'tools',emoji:'▤',tone:'#f1efff',description:'Open Google Forms to create or share a comment form.',url:'https://forms.google.com/'},
    {name:'FlipHTML5 · Steve Jobs',category:'media',emoji:'▣',tone:'#fff3e8',description:'Find a Steve Jobs book flipbook by Walter Isaacson.',url:'https://fliphtml5.com/search/?q=Steve%20Jobs%20Walter%20Isaacson'},
    {name:'Instagram · Hello my friend',category:'social',emoji:'◎',tone:'#fff0f6',description:'Visit Instagram. Sign-in may be required.',url:'https://www.instagram.com/'},
    {name:'TikTok · Video unavailable',category:'social',emoji:'♪',tone:'#f0f1f5',description:'Browse TikTok videos and creators.',url:'https://www.tiktok.com/'},
    {name:'GIPHY · Oops! 404',category:'fun',emoji:'GIF',tone:'#effaf6',description:'Search GIPHY for a playful 404 reaction.',url:'https://giphy.com/search/404'},
    {name:'Chrome Dino',category:'fun',emoji:'🦖',tone:'#f1f5e9',description:'A little dinosaur game in an embedded preview.',url:'https://chromedino.com/embed',embed:'https://chromedino.com/embed'},
    {name:'AsTeRICS Grid',category:'tools',emoji:'▦',tone:'#edf8fa',description:'Communication grid / AAC tool by AsTeRICS.',url:'https://grid.asterics.eu/?output=embed',embed:'https://grid.asterics.eu/?output=embed'},
    {name:'Example Domain',category:'tools',emoji:'↗',tone:'#f2f1fc',description:'A reserved example domain for documentation.',url:'https://www.example.com',embed:'https://www.example.com'},
    {name:'Google',category:'tools',emoji:'G',tone:'#f3f6ff',description:'Open Google search in a new tab.',url:'https://www.google.com/'},
    {name:'Wikimedia Commons',category:'media',emoji:'✿',tone:'#fff8e8',description:'Explore freely licensed images, including radio logos.',url:'https://commons.wikimedia.org/wiki/Category:Radio_station_logos'}
  ];
  function draw(filter='all'){const grid=$('#manifestGrid');if(!grid)return;grid.innerHTML=items.filter(item=>filter==='all'||item.category===filter).map(item=>{const preview=item.embed?'<iframe loading="lazy" title="Preview: '+escapeHTML(item.name)+'" src="'+escapeHTML(item.embed)+'" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" referrerpolicy="strict-origin-when-cross-origin"></iframe>':'<span class="manifest-emoji">'+escapeHTML(item.emoji)+'</span>';return '<article class="manifest-card"><div class="manifest-preview" style="background:'+item.tone+'">'+preview+'<em>'+escapeHTML(item.category.toUpperCase())+'</em></div><div class="manifest-body"><span class="eyebrow">WEB COLLECTION</span><h3>'+escapeHTML(item.name)+'</h3><p>'+escapeHTML(item.description)+'</p><div class="manifest-actions"><a href="'+escapeHTML(item.url)+'" target="_blank" rel="noopener noreferrer">Open site ↗</a></div></div></article>'}).join('')}
  document.addEventListener('DOMContentLoaded',()=>{$('#manifestFilter')?.addEventListener('change',e=>draw(e.target.value));draw()});
})();
