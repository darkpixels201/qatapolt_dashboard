<Grid
  item
  md={6}
  xs={12}
  style={{
    boxShadow: "2px 1px 15px -1px rgba(0,0,0,0.10)",
    // backgroundColor: "red",
    borderRadius: 5,
    padding: 25,
    flexWrap: "wrap",
  }}
>
  <Grid item md={12}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // justifyContent: "space-evenly",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      {/* <LightgalleryProvider>
                      <h1 style={{ textAlign: "center" }}>Photo Lightbulb</h1>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.authimage.map((p) => (
                          <PhotoItem key={p} image={p} group="group2" />
                        ))}
                      </div>
                    </LightgalleryProvider> */}
      <LightgalleryProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // justifyContent: "space-evenly",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <PhotoItem key={item.id} image={item.authimg1} group="group1" />
          <PhotoItem key={item.id} image={item.authimg2} group="group1" />
        </div>
      </LightgalleryProvider>
    </div>
  </Grid>
  <Spacer height={20} />
  <Grid item md={12}>
    <div style={{ display: "flex" }}>
      <CustomText title={"Name:"} fontFamily={"medium"} />
      <Spacer width={5} />
      <CustomText title={item.name} />
    </div>

    <Spacer height={20} />
    <div style={{ display: "flex" }}>
      <CustomText title={"Email:"} fontFamily={"medium"} />
      <Spacer width={5} />
      <CustomText title={item.email} />
    </div>
  </Grid>

  <Spacer height={20} />
  <Grid item md={12}>
    <div style={{ display: "flex" }}>
      <CustomText title={"Sport:"} fontFamily={"medium"} />
      <Spacer width={5} />
      <CustomText title={item.sport} />
    </div>
    <Spacer height={20} />
    <div style={{ display: "flex" }}>
      <CustomText title={"Account type:"} fontFamily={"medium"} />
      <Spacer width={5} />
      <CustomText title={item.accounttype} />
    </div>
  </Grid>
  <Spacer height={20} />
  <Grid item md={12}>
    <div style={{ display: "flex" }}>
      <CustomText title={"Skill 1:"} fontFamily={"medium"} />
      <Spacer width={5} />
      <CustomText title={item.skill1} />
    </div>
    <Spacer height={20} />
    <div style={{ display: "flex" }}>
      <CustomText title={"Skill 2:"} fontFamily={"medium"} />
      <Spacer width={5} />
      <CustomText title={item.skill2} />
    </div>
  </Grid>
  <Spacer height={20} />
  <Grid item md={12}>
    <div style={{ display: "flex" }}>
      <CustomText title={"Skill 3:"} fontFamily={"medium"} />
      <Spacer width={5} />
      <CustomText title={item.skill3} />
    </div>
  </Grid>
  <Spacer height={20} />
</Grid>;
