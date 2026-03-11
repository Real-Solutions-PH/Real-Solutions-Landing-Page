import Link from "next/link";

export const Logo = () => {
  return (
    <div className="bg-[linear-gradient(rgb(0,0,0)_-278%,rgb(255,255,255)_136%)] shadow-[rgba(122,122,122,0.58)_0px_0.706592px_0.989229px_-0.541667px,rgba(122,122,122,0.57)_0px_1.80656px_2.52919px_-1.08333px,rgba(122,122,122,0.55)_0px_3.62176px_5.07046px_-1.625px,rgba(122,122,122,0.52)_0px_6.8656px_9.61184px_-2.16667px,rgba(122,122,122,0.46)_0px_13.6468px_19.1055px_-2.70833px,rgba(122,122,122,0.32)_0px_30px_42px_-3.25px] p-2.5 rounded-full">
      <div className="bg-[linear-gradient(90deg,rgb(0,0,0)_0%,rgba(0,0,0,0.4)_213%)] shadow-[rgba(16,49,77,0.24)_0px_0.706592px_0.706592px_-0.666667px,rgba(16,49,77,0.23)_0px_1.80656px_1.80656px_-1.33333px,rgba(16,49,77,0.22)_0px_3.62176px_3.62176px_-2px,rgba(16,49,77,0.2)_0px_6.8656px_6.8656px_-2.66667px,rgba(16,49,77,0.16)_0px_13.6468px_13.6468px_-3.33333px,rgba(16,49,77,0.06)_0px_30px_30px_-4px] p-4 rounded-full">
        <div className="relative aspect-square w-16">
          <img src="/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="bg-[linear-gradient(rgb(0,0,0)_-278%,rgb(255,255,255)_136%)] shadow-[rgba(122,122,122,0.58)_0px_0.706592px_0.989229px_-0.541667px,rgba(122,122,122,0.57)_0px_1.80656px_2.52919px_-1.08333px,rgba(122,122,122,0.55)_0px_3.62176px_5.07046px_-1.625px,rgba(122,122,122,0.52)_0px_6.8656px_9.61184px_-2.16667px,rgba(122,122,122,0.46)_0px_13.6468px_19.1055px_-2.70833px,rgba(122,122,122,0.32)_0px_30px_42px_-3.25px] p-1 rounded-full">
        <div className="bg-[linear-gradient(90deg,rgb(0,0,0)_0%,rgba(0,0,0,0.4)_213%)] shadow-[rgba(16,49,77,0.24)_0px_0.706592px_0.706592px_-0.666667px,rgba(16,49,77,0.23)_0px_1.80656px_1.80656px_-1.33333px,rgba(16,49,77,0.22)_0px_3.62176px_3.62176px_-2px,rgba(16,49,77,0.2)_0px_6.8656px_6.8656px_-2.66667px,rgba(16,49,77,0.16)_0px_13.6468px_13.6468px_-3.33333px,rgba(16,49,77,0.06)_0px_30px_30px_-4px] p-1.5 rounded-full">
          <div className="relative aspect-square w-7">
            <img src="/logo.png" alt="logo" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export const FooterLogo = () => {
  return (
    <div className="bg-[linear-gradient(rgb(0,0,0)_-278%,rgb(255,255,255)_136%)] shadow-[rgba(122,122,122,0.58)_0px_0.706592px_0.989229px_-0.541667px,rgba(122,122,122,0.57)_0px_1.80656px_2.52919px_-1.08333px,rgba(122,122,122,0.55)_0px_3.62176px_5.07046px_-1.625px,rgba(122,122,122,0.52)_0px_6.8656px_9.61184px_-2.16667px,rgba(122,122,122,0.46)_0px_13.6468px_19.1055px_-2.70833px,rgba(122,122,122,0.32)_0px_30px_42px_-3.25px] p-2 rounded-full">
      <div className="bg-[linear-gradient(90deg,rgb(0,0,0)_0%,rgba(0,0,0,0.4)_213%)] shadow-[rgba(16,49,77,0.24)_0px_0.706592px_0.706592px_-0.666667px,rgba(16,49,77,0.23)_0px_1.80656px_1.80656px_-1.33333px,rgba(16,49,77,0.22)_0px_3.62176px_3.62176px_-2px,rgba(16,49,77,0.2)_0px_6.8656px_6.8656px_-2.66667px,rgba(16,49,77,0.16)_0px_13.6468px_13.6468px_-3.33333px,rgba(16,49,77,0.06)_0px_30px_30px_-4px] p-2 rounded-full">
        <div className="relative aspect-square w-14">
          <img src="/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};
