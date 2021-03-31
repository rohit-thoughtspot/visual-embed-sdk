import ArrowDown from '../../assets/svg/arrowDown.svg';
import ArrowForward from '../../assets/svg/arrowForward.svg';

export const collapseAndExpandLeftNav = () => {
    setTimeout(() => {
        document
            .querySelectorAll('.navWrapper>.ulist>ul>li>p')
            .forEach((tag, index) => {
                if (tag.childNodes.length < 2) {
                    const divElement = document.querySelectorAll(
                        '.navWrapper>.ulist>ul>li>div.ulist',
                    )[index];

                    const spanElement = document.createElement('span');
                    spanElement.classList.add('iconSpan');
                    const imageElement = document.createElement('img');
                    imageElement.src = ArrowDown;
                    spanElement.appendChild(imageElement);
                    tag.appendChild(spanElement);

                    tag.addEventListener('click', () => {
                        divElement.classList.toggle('displayNone');
                        const img = divElement.parentElement.children[0]
                            .children[0].children[0] as HTMLImageElement;
                        img.src = divElement.classList.contains('displayNone')
                            ? ArrowForward
                            : ArrowDown;
                    });
                }
            });
    }, 50);
};
