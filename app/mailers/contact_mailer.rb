class ContactMailer < ApplicationRecord
  def send_contact(contact)
    @contact = contact
  end
end