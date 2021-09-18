import React from 'react';

export const Footer = () => {
    return (
        <footer className="self-end flex flex-col justify-center items-center w-full bg-accent text-myWhite">
            <p className="font-sans pt-36 text-2xl lg:text-3xl lg:pt-32">
                Włóczkowa Mama
            </p>
            <p className="text-sm font-sans pt-8 lg:pt-11 lg:text-base w-4/12 text-center">
                Strona powstała z zamiłowania do sznurków, włóczek, szydełka
                oraz makramy. Poświęcona jest moim projektom wykonywanym w 100%
                ręcznie oraz inspiracjom, z których czerpałam przy tworzeniu
                rękodzieła. Strona Włóczkowa Mama jest połączeniem pasji z
                miłością do życia i ludzi.
            </p>
            <div className="flex justify-center items-center gap-y-7 pt-8 lg:pt-11 lg:gap-x-8">
                <a
                    className="underline text-myWhite"
                    href='href="https://www.facebook.com/karolina.zurawska.1000"'
                >
                    Facebook
                </a>
                <a
                    className="underline text-myWhite"
                    href="https://www.instagram.com/wloczkowa_mama/"
                >
                    Instagram
                </a>
            </div>
            <div className="flex flex-col items-center justify-center font-sans pt-16 pb-8">
                <p className="text-xs">&#169; 2021 Włóczkowa Mama</p>
                <p className="text-xs">
                    blog made by{' '}
                    <a
                        className="text-xs text-myWhite"
                        href="https://github.com/lagdush"
                    >
                        Łukasz Żurawski
                    </a>
                </p>
            </div>
        </footer>
    );
};
