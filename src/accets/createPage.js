function createPage(allPage,showPage,nowPage){//所有的页数，要显示的页数，当前的页数
    showPage -= 2;
    let pages = [];
    if(nowPage-1>=2 && allPage-(nowPage+showPage-1)>=2){
        pages.push(1);
        pages.push('...');
        for(let i=nowPage;i<(nowPage+showPage);i++){
            pages.push(i);
        }
        pages.push('...');
        pages.push(allPage);
    }else if(nowPage-1<2){
        for(let i=1;i<showPage+2;i++){
            pages.push(i);
        }
        pages.push('...');
        pages.push(allPage);
    }else if(allPage-(nowPage+showPage-1)<2){
        pages.push(1);
        pages.push('...');
        for(let i=(allPage-showPage);i<=allPage;i++){
            pages.push(i);
        }
    }
    return pages;
}
console.log(createPage(100,8,99));