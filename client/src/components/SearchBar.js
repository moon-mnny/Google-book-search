import React from "react";

function SearchBar() {
  return (
    <Jumbotron fluid>
      <Container>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Container>
    </Jumbotron>
  );
}
export default SearchBar;
