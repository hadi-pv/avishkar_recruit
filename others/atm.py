#!/usr/bin/python3

#For demo, use card_no as 01234 or 56789. And for the same pin will be 43210 and 98765 respectively.

from time import sleep
from getpass import getpass

#For demo purposes error is created
class CardInvalidException(Exception):
    def __int__(self,msg):
        self.msg=msg

class PinInvalidException(Exception):
    def __int__(self,msg):
        self.msg=msg

class TransactionError(Exception):
    def __int__(self,msg):
        self.msg=msg

#For demo purposes dummy variables are initiated
card_nos=['01234','56789']
pin={'01234':43210,'56789':98765}
transaction_is_success=True

class ATM:
    def __init__(self,total_money):
        self.remaining=total_money


    def __card_entry(self,card_no):
        print("Card Inserted")
        try:
            #check the database for the card details
            card_in_database=True if card_no in card_nos else False
            #If card details is in the database
            if card_in_database:
                print("Welcome User")
                return 1
            #else
            else:
                raise CardInvalidException("Card Number is Invalid")
        except Exception as e:
            print("Error : "+str(e))
        finally:
            #Close the database connection
            pass


    def __check_pin(self,card_no,pin_no):
        try:
            #check the database for the pin number of the card.
            #If the pin number has to be encrypted before sending using a public key use the rsa python module.
            pin_is_correct=True if pin[card_no]==pin_no else False
            #If pin match the card number
            if pin_is_correct:
                self.__transaction(int(input("Enter the amount to be transacted : ")))
            else:
                raise PinInvalidException("Pin is Invalid")
        except Exception as e:
            print("Error : "+str(e))
        finally:
            #close the database connection
            pass

    def __transaction(self,value):
        if value<=self.remaining:
            print("Transaction in progress")
            sleep(2.5)
            try:
                #Connect to database and bank server and process the request
                #If balance is sufficient and transaction is suuccessfull return true else error
                if transaction_is_success:
                    print("Transaction is successfull")
                else:
                    raise TransactionError("Transaction failed")
            except TransactionError as e:
                print("Error : "+str(e))
            finally:
                #close server and database connection
                pass
            self.remaining-=value
        else:
            print("ATM does not have enough balance right now \n Sorry for your inconvenience")

    #action is called within the protected class
    def action(self):
        card_no=input("Enter your card number : ")
        if self.__card_entry(card_no):
            #Prompt for password. For security password is not shown
            pin_no=int(getpass(prompt="Pin Number : ",stream=None))
            self.__check_pin(card_no,pin_no)
        

if __name__=="__main__":
    ATM_1=ATM(100000)
    print("Remaining amount in ATM :",ATM_1.remaining)
    ATM_1.action()

