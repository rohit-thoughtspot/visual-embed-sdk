export const getAllPageIds = (navContent: string): string[] => {
    const divElement = document.createElement('div');
    divElement.innerHTML = navContent;
    const allPageIds = [];
    divElement.querySelectorAll('a').forEach((link: HTMLAnchorElement) => {
        const splitArr = link.href.split('?');
        if (splitArr.length > 1) {
            const urlParams = new URLSearchParams(splitArr[1]);
            const pageId = urlParams.get('pageid');
            if (pageId) {
                allPageIds.push(pageId);
            }
        }
    });
    return allPageIds;
};
