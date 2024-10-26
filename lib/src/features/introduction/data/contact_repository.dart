import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:portfolio/src/features/introduction/domain/contact.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'contact_repository.g.dart';

@riverpod
ContactRepository contactRepository(ContactRepositoryRef ref) {
  return ContactRepository();
}

class ContactRepository {
  List<Contact> fetchContacts() {
    return const [
      Contact(
        tooltip: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mohammed-alsayani/',
        icon: FontAwesomeIcons.linkedin,
      ),
      Contact(
        tooltip: 'Github',
        url: 'https://github.com/MohammedAlsayani',
        icon: FontAwesomeIcons.github,
      ),
      Contact(
        tooltip: 'mo7ammedalsayani@gmail.com',
        url: 'mailto:mo7ammedalsayani@gmail.com',
        icon: FontAwesomeIcons.solidEnvelope,
      ),
      Contact(
        tooltip: '+966 53 81 40 802',
        url: 'tel:+966538140802',
        icon: FontAwesomeIcons.phone,
      ),
      // Contact(
      //   tooltip: 'Medium',
      //   url: 'https://medium.com/@eugeniotesio',
      //   icon: FontAwesomeIcons.medium,
      // ),
    ];
  }
}
