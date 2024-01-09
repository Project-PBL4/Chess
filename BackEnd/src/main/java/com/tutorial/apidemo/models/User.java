package com.tutorial.apidemo.models;

import java.util.Objects;

import jakarta.persistence.*;

@Entity
@Table(name = "tblUser")
public class User {
    @Id
    // @GeneratedValue(strategy = GenerationType.AUTO)
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1// increament by
                                                                                                 // 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    private Long id;
    // validate = constraint
    @Column(nullable = false, unique = true, length = 300)
    private String userName;
    private String userPassword;
    private String userEmail;
    private String country;
    private int totalRound;
    private int totalWin;
    private int totalLoss;
    private int totalTie;

    public String getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(String joiningDate) {
        this.joiningDate = joiningDate;
    }

    public String getStory() {
        return story;
    }

    public void setStory(String story) {
        this.story = story;
    }

    private String joiningDate;
    private String story;
    @Transient
    private int percentWin;

    public int getPercentWin() {
        // return 0;
        try {
            if (totalRound != 0) {
                return (totalWin * 100) / totalRound;
            } else {
                return 0;
            }
        } catch (Exception e) {
            return 0; 
        }
    }

    @Transient
    private int countRank;

    public int getCountRank() {
        return 1000 + totalWin * 10 - totalLoss * 8 + totalTie * 2;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        User user = (User) o;
        return totalRound == user.totalRound && totalWin == user.totalWin && totalLoss == user.totalLoss
                && totalTie == user.totalTie && percentWin == user.percentWin && countRank == user.countRank
                && Objects.equals(id, user.id) && Objects.equals(userName, user.userName)
                && Objects.equals(userPassword, user.userPassword) && Objects.equals(userEmail, user.userEmail)
                && Objects.equals(country, user.country);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userName, userPassword, userEmail, country, totalRound, totalWin, totalLoss, totalTie,
                percentWin, countRank);
    }

    public User(String userName, String userPassword, String country, int totalRound, int totalWin, int totalLoss,
            int totalTie, String joiningDate) {
        this.userName = userName;
        this.userPassword = userPassword;
        this.country = country;
        this.totalRound = totalRound;
        this.totalWin = totalWin;
        this.totalLoss = totalLoss;
        this.totalTie = totalTie;
        this.joiningDate = joiningDate;
    }

    public User() {

    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", country='" + country + '\'' +
                ", totalRound=" + totalRound +
                ", totalWin=" + totalWin +
                ", totalLoss=" + totalLoss +
                ", totalTie=" + totalTie +
                ", joiningDate='" + joiningDate + '\'' +
                ", story='" + story + '\'' +
                ", percentWin=" + percentWin +
                ", countRank=" + countRank +
                '}';
    }

    public User(String userName, String userPassword, String userEmail, String country, int totalRound, int totalWin,
            int totalLoss, int totalTie, int percentWin, int countRank, String joiningDate, String story) {
        this.userName = userName;
        this.userPassword = userPassword;
        this.userEmail = userEmail;
        this.country = country;
        this.totalRound = totalRound;
        this.totalWin = totalWin;
        this.totalLoss = totalLoss;
        this.totalTie = totalTie;
        this.percentWin = percentWin;
        this.countRank = countRank;
        this.joiningDate = joiningDate;
        this.story = story;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getTotalRound() {
        return totalRound;
    }

    public void setTotalRound(int totalRound) {
        this.totalRound = totalRound;
    }

    public int getTotalWin() {
        return totalWin;
    }

    public void setTotalWin(int totalWin) {
        this.totalWin = totalWin;
    }

    public int getTotalLoss() {
        return totalLoss;
    }

    public void setTotalLoss(int totalLoss) {
        this.totalLoss = totalLoss;
    }

    public int getTotalTie() {
        return totalTie;
    }

    public void setTotalTie(int totalTie) {
        this.totalTie = totalTie;
    }
}
