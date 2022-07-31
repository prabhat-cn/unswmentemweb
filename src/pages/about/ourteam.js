import React, { Fragment, useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import MeetBannerAction from "../../components/AboutPages/MeetTeam/MeetBannerAction";
import TeamMembers from "../../components/AboutPages/MeetTeam/TeamMembers";
import Layout from "../../components/layout";

const MeetOurTeam = () => {
  const [meetTeam, setMeetTeam] = useState({
    bannerTitle: {},
    teams: {},
  });
  const ourTeamQuery = useStaticQuery(graphql`
    query {
      allContentfulAboutMeetTheTeam {
        nodes {
          id
          meetTheTeamTitle
        }
      }
      allContentfulAboutMeetTeams {
        nodes {
          id
          memberName
          memberDetails {
            memberDetails
          }
          memberImage {
            id
            file {
              url
            }
          }
          readBio
          designation
          companyName
        }
      }
    }
  `);
  // console.log("ourTeamQuery->", ourTeamQuery);
  useEffect(() => {
    setMeetTeam({
      bannerTitle: ourTeamQuery?.allContentfulAboutMeetTheTeam,
      teams: ourTeamQuery?.allContentfulAboutMeetTeams,
    });
  }, [ourTeamQuery]);

  return (
    <>
      <Layout>
        {meetTeam?.bannerTitle &&
          meetTeam?.bannerTitle?.nodes?.length > 0 &&
          meetTeam?.bannerTitle?.nodes?.map((bData, index) => {
            return (
              <Fragment key={index}>
                <MeetBannerAction teamBannerTitle={bData} />
              </Fragment>
            );
          })}
        <TeamMembers teamMember={meetTeam?.teams} />
      </Layout>
    </>
  );
};

export default MeetOurTeam;
