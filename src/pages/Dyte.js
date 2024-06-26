import { useEffect } from 'react';
import { useDyteClient, DyteProvider } from '@dytesdk/react-web-core';
import MyMeeting from './my-react-page-dyte';
import DyteMeeting from './my-meeting'


export default function App() {
  const [meeting, initMeeting] = useDyteClient();

  useEffect(() => {
    initMeeting({
      authToken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjRkZDA5NmUwLWUyYzYtNGVjNS04ZTc1LTc5ZjY1YmNmMjU3MyIsIm1lZXRpbmdJZCI6ImJiYjQxZGM5LTAxMWItNDY5Yi1hOGY3LTY1N2VjZDcxMjc5ZSIsInBhcnRpY2lwYW50SWQiOiJhYWFjNGE5MC1jNThhLTRhYTktOTg4NC00YjcyZjdjMTczY2MiLCJwcmVzZXRJZCI6ImVlMTAyYTQ0LWMwYTAtNDE0NS1hM2Q0LTk1MTRmNzQ0Mzg2ZSIsImlhdCI6MTcxOTMyMTA5MCwiZXhwIjoxNzI3OTYxMDkwfQ.UcMZ6YF311Pr2-O6ChKLgwWfrSohjKddihMjtQyTxzYppPFPvthzchs1Oxvl_fXyEC6bzUZiUreEj02ymFVP1Pgwyo6is0Qu04afrSj1vQG80cDTey00UCDdtOiSymXEzhAoKNgSF3lzEhFWDESxB5rKohQF2jdo_PATN2wE7QDX9looDR1vdKlZOAs6JzTzAi9pIGoji1O_oiio7qAzpqbbAS0mpKmvBNnFDWXba0MTYPzHYAlkf0S5D92DVXp_kzn0G2j94slAZnX7CmFMzP-Fys0bsRVIuVg43JDvoKcTNKx81-yQOl61gksLWny4FGywoAf6dqktkn_Tt_LN4w',
      defaults: {
        audio: false,
        video: false,
      },
    });
  }, []);

  return (
    <DyteProvider value={meeting} fallback={<i>Loading...</i>}>
      {/* Render your UI here. Subcomponents can now use the `useDyteMeeting` and `useDyteSelector` hooks */}
      <MyMeeting />
      <DyteMeeting/>
    </DyteProvider>
  );
}