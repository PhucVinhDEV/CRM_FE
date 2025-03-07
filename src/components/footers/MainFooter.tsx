import { FOOTER_MENU } from "@/constants/menu";
import { useTranslation } from "@/i18n/server";
import SSRLink from "../commons/custom-links/SSRLink";

const MainFooter = async () => {
  const { t } = await useTranslation();
  return (
    <div className="hidden bg-[#F2F3F3] px-4 py-16 dark:bg-[#121212] lg:block">
      <div className="container grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {FOOTER_MENU.map((box, index) => (
          <div key={index}>
            <span className="text-lg text-[#a2a9b6]">
              {t(`components.footer.title.${box.name}`)}
            </span>
            <div className="mt-3 grid grid-cols-1 gap-3">
              {box.content.map((item, index) => (
                <SSRLink
                  href={item.link}
                  className="text-blackBase dark:text-whiteBase"
                  key={index}
                >
                  {t(`components.footer.content.${item.name}`)}
                </SSRLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainFooter;
