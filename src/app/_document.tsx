import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    // Crea una instancia de ServerStyleSheet
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // Reemplaza el método renderPage para recolectar los estilos del servidor
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      // Obtén las propiedades iniciales del documento
      const initialProps = await Document.getInitialProps(ctx);

      // Devuelve las propiedades iniciales junto con los estilos recolectados
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      // Sella el ServerStyleSheet para evitar fugas de memoria
      sheet.seal();
    }
  }
}

export default MyDocument;
