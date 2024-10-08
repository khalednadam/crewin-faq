import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { ConfigProvider, Layout } from "antd";
import AppHeader from "@/app/components/AppHeader";
import { Content, Footer } from "antd/es/layout/layout";
import AppFooter from "@/app/components/AppFooter";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CreWin | FAQ",
  description: "frequently asked questions",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${font.className} h-full relative`}>
        <NextIntlClientProvider messages={messages}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#012030",
                fontFamily: "Montserrat",
              },
            }}
          >
            <AppHeader />
            <Content className="min-h-[80vh]">
              <div>{children}</div>
            </Content>
            <Footer className="bg-background ">
              <AppFooter />
            </Footer>
          </ConfigProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
